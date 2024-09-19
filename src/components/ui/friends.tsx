import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/utils";

interface Friend {
  name: string;
  link: string;
  image: string;
}

export const ParallaxScroll = ({
  friends,
  className,
}: {
  friends: Friend[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(friends.length / 3);

  const firstPart = friends.slice(0, third);
  const secondPart = friends.slice(third, 2 * third);
  const thirdPart = friends.slice(2 * third);

  const renderImageGrid = (
    friendsPart: Friend[],
    translateValue: any,
    partIndex: number,
  ) =>
    friendsPart.map((friend, idx) => {
      const { name, link, image } = friend;

      return (
        <motion.div
          className="relative group"
          style={{ y: translateValue }}
          key={`grid-${partIndex}-${idx}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            className="!m-0 gap-10 rounded-lg object-cover object-center !p-0 transition-all duration-500 ease-in-out group-hover:brightness-50"
            height={400} // The aspect ratio will be maintained
            width={400} // The aspect ratio will be maintained
            alt="thumbnail"
            loading="lazy"
            layout="responsive" // Use layout="responsive" to maintain aspect ratio
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>
            <a
              href={link}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </motion.div>
      );
    });

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto hidescrollbar",
        className,
      )}
      ref={gridRef}
    >
      <div className="mx-auto grid grid-cols-3 items-start gap-5 pr-1 pb-20 pt-4.5">
        <div className="grid gap-10">
          {renderImageGrid(firstPart, translateFirst, 0)}
        </div>
        <div className="grid gap-10">
          {renderImageGrid(secondPart, translateSecond, 1)}
        </div>
        <div className="grid gap-10">
          {renderImageGrid(thirdPart, translateThird, 2)}
        </div>
      </div>
    </div>
  );
};
