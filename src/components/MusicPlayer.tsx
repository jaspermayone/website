"use client";

import { useEffect, useState, useCallback } from "react";

export const useMusicKit = () => {
  const [musicKit, setMusicKit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const fetchTokenAndInitialize = async () => {
      try {
        // Fetch token from our secure API endpoint
        const response = await fetch("/api/apple-music/token");
        if (!response.ok) {
          throw new Error("Failed to fetch developer token");
        }

        let { token } = await response.json();
        if (!token) {
          throw new Error("No token received");
        }

        // Load MusicKit script
        if (!window.MusicKit) {
          const script = document.createElement("script");
          script.src = "https://js-cdn.music.apple.com/musickit/v3/musickit.js";
          script.async = true;
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }

        // Wait for MusicKit to be ready
        await new Promise((resolve) => {
          if (window.MusicKit) {
            resolve();
          } else {
            document.addEventListener("musickitloaded", resolve);
          }
        });

        // Initialize MusicKit
        const instance = await window.MusicKit.configure({
          developerToken: token,
          app: {
            name: "My Cool Web App",
            build: "1978.4.1",
          },
        });

        setIsAuthorized(instance.isAuthorized);
        instance.addEventListener("authorizationStatusDidChange", () => {
          setIsAuthorized(instance.isAuthorized);
        });

        setMusicKit(instance);
        setIsLoading(false);
      } catch (err) {
        console.error("MusicKit initialization error:", err);
        setError(err);
        setIsLoading(false);
      }
    };

    fetchTokenAndInitialize();

    return () => {
      if (musicKit) {
        musicKit.removeEventListener("authorizationStatusDidChange");
      }
    };
  }, []);

  const authorize = useCallback(async () => {
    try {
      if (musicKit) {
        await musicKit.authorize();
        setIsAuthorized(true);
      }
    } catch (err) {
      console.error("Authorization error:", err);
      throw err;
    }
  }, [musicKit]);

  const unauthorize = useCallback(async () => {
    try {
      if (musicKit) {
        await musicKit.unauthorize();
        setIsAuthorized(false);
      }
    } catch (err) {
      console.error("Unauthorization error:", err);
      throw err;
    }
  }, [musicKit]);

  return {
    musicKit,
    isLoading,
    error,
    isAuthorized,
    authorize,
    unauthorize,
  };
};

// Example usage in a component:
export default function MusicPlayer() {
  const { musicKit, isLoading, error, isAuthorized, authorize, unauthorize } =
    useMusicKit();
  const [libraryAlbums, setLibraryAlbums] = useState(null);

  const fetchUserLibrary = async () => {
    try {
      if (!isAuthorized) {
        await authorize();
      }

      const { data: result } = await musicKit.api.music("v1/me/library/albums");
      setLibraryAlbums(result);
    } catch (err) {
      console.error("Error fetching library:", err);
      if (err.status === 403) {
        await authorize();
      }
    }
  };

  const handlePlay = async () => {
    try {
      if (!isAuthorized) {
        await authorize();
      }
      await musicKit.play();
    } catch (err) {
      console.error("Play error:", err);
    }
  };

  if (isLoading) {
    return <div>Loading MusicKit...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Apple Music Player</h1>

      <div className="space-y-4">
        {!isAuthorized ? (
          <button
            onClick={authorize}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Sign in to Apple Music
          </button>
        ) : (
          <div className="space-y-4">
            <button
              onClick={unauthorize}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>

            <button
              onClick={handlePlay}
              className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
              Play
            </button>

            <button
              onClick={fetchUserLibrary}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
              Load Library
            </button>

            {libraryAlbums && (
              <div>
                <h2 className="text-xl font-bold mt-4 mb-2">Your Library</h2>
                <pre className="bg-gray-100 p-4 rounded">
                  {JSON.stringify(libraryAlbums, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
