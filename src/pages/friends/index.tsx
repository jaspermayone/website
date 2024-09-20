import { Suspense, useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/friends";
import DotsBackground from "@/components/DotsBackground";
import Link from "next/link";

/*
  Ben Dixon - https://malted.dev
  Aram Shiva - https://aram.sh/
  Sam Poder - https://sampoder.com/
  Deven Jadhav - https://devenjadhav.com/
  Aarya - https://github.com/radioblahaj
  Alex Deforest - https://defo.one
  Manitej - https://github.com/techpixel
  Ruien Luo - https://rluo.dev/
  Reese Armstrong - https://reeseric.ci/
  Rhys Panopio - https://www.linkedin.com/in/rhys-panopio/
  Ian Madden - https://github.com/YodaLightsabr
  Kieran - https://kieranklukas.com/
  Ryan Di Lorenzo - https://github.com/LimesKey
  Samuel F. - https://sfernandez.dev/
  Luke O - https://github.com/Luke-Oldenburg
  Ryan Rudes - https://ryanrudes.com/
*/

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
  const [friends, setFriends] = useState<any[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("/api/friends");
      const data = await response.json();
      setFriends(data); // Store the friends data
    };

    fetchFriends();
  }, []);

  const staticFriends = useMemo(() => {
    const shuffledFriends = shuffleArray(
      friends.map((friend) => ({
        ...friend,
        image: `/images/friends/${friend.file_name}`,
      })),
    );
    return [
      {
        name: "I have some super cool friends, check them all out! 🌟 (btw, shoot me a message if you want to be added here, I definitely missed some people lol.)",
        type: "text", // Define it as text to handle separately in the parallax scroll
      },
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
