import { Suspense, useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/friends";
import DotsBackground from "@/components/DotsBackground";
import { FriendOrText, Friend, TextEntry } from "@/lib/interfaces";

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Create a fallback component for Suspense loading state
function LoadingFallback() {
  return <div className="text-lg text-center mt-10">Loading...</div>;
}

export default function Friends() {
  const [friends, setFriends] = useState<FriendOrText[]>([]);

  function isFriend(friend: FriendOrText): friend is Friend {
    return (friend as Friend).file_name !== undefined;
  }

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("/api/friends");
      const data: FriendOrText[] = await response.json();
      setFriends(data); // Store the friends data
    };

    fetchFriends();
  }, []);

  const staticFriends = useMemo(() => {
    const shuffledFriends = shuffleArray(
      friends.map((friend) => {
        if (isFriend(friend)) {
          return {
            ...friend,
            image: `/images/friends/${friend.file_name}`,
          };
        }
        return friend; // Return TextEntry objects unchanged
      }),
    );

    return [
      {
        name: "I have some super cool friends, check them all out! 🌟 (btw, shoot me a message if you want to be added here, I definitely missed some people lol.)",
        type: "text" as const, // Use 'as const' to ensure this is typed as 'text'
      } as TextEntry, // Explicitly type as TextEntry
      ...shuffledFriends,
    ];
  }, [friends]);

  return (
    <>
      <DotsBackground />
      <div className="min-h-screen flex flex-col items-center px-5">
        {/* Friends Parallax Scroll with Suspense */}
        <div className="w-full flex justify-center mt-5">
          <Suspense fallback={<LoadingFallback />}>
            <ParallaxScroll className="h-full w-full" friends={staticFriends} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
