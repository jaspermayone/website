import { PaneraCard } from "@/components/PaneraCard";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panera",
  description:
    "What I usually get at Panera, in case anyone wants to get me Panera.",
};

export default function Panera() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/panera/panera-bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-lg p-4 mb-4">
            <Image
              src="/images/panera/panera-logo.png"
              alt="Panera Bread"
              height={160}
              width={160}
              className="mx-auto"
            />
          </div>
          <div className="inline-block bg-white rounded-lg p-4 mb-4">
            <h1 className="text-3xl font-bold mb-4">
              Jasper's Panera Bread Order
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inspired by people creating /chipotle pages with their Chipotle
              order for when their friends get them Chipotle, here's what I
              usually get at Panera in case anyone wants to get me Panera and is
              wondering what to get.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <PaneraCard
            imagesrc="/images/panera/toastedgardencaprese.jpg"
            name="Toasted Garden Caprese"
            calories={890}
            size="Whole"
            text="Customizations: Add Bacon, Sub Black Pepper Focaccia"
            link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/toasted-garden-caprese.html"
          />

          <PaneraCard
            imagesrc="/images/panera/mangosmoothie.jpg"
            name="Mango Smoothie"
            calories={300}
            link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/mango-smoothie.html"
          />

          <PaneraCard
            imagesrc="/images/panera/cinnamonroll.jpg"
            name="Cinnamon Roll"
            calories={520}
            link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/cinnamon-roll.html"
          />
        </div>
      </main>
    </div>
  );
}

{
  /* <PaneraCard
    imagesrc="/images/panera/toastedgardencaprese.jpg"
    name="Toasted Garden Caprese"
    calories={890}
    size="Whole"
    text="Customizations: Add Bacon, Sub Black Pepper Focaccia"
    link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/toasted-garden-caprese.html"
/>

<PaneraCard
    imagesrc="/images/panera/mangosmoothie.jpg"
    name="Mango Smoothie"
    calories={300}
    link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/mango-smoothie.html"
/>

<PaneraCard
    imagesrc="/images/panera/cinnamonroll.jpg"
    name="Cinnamon Roll"
    calories={520}
    link="https://www.panerabread.com/content/panerabread_com/en-us/menu/products/cinnamon-roll.html"
/> */
}
