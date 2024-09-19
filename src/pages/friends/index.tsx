import { useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/friends";

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
    return shuffledFriends;
  }, [friends]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center px-5">
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-full w-full mt-12 mb-6">
          <div className="flex items-center justify-between">
            {/*  <Link href="/" className="text-xl text-slate-600">
             &larr; Back to Home
             </Link> */}
            <p>I have some super cool friends, check them out!</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ParallaxScroll
            className="max-h-screen w-full"
            friends={staticFriends}
          />
        </div>
      </div>
    </>
  );
}
