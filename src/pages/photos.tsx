import { useEffect, useState, useMemo } from "react";
import { ParallaxScroll } from "../components/ui/photos";
import { motion } from "framer-motion";

export default function Photos() {
  const staticImages = useMemo(() => ["/houseabove.png", "/valley.png"], []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", duration: 1.25 }}
        className="max-h-screen"
      >
        <div className="md:pl-48 md:pt-5 pl-9 text-wrap md:w-[50rem]">
          <p className="font-medium text-2xl">
            Photos
          </p>
          <ParallaxScroll
            images={staticImages.length ? staticImages : staticImages}
          />
        </div>
      </motion.div>
    </>
  );
}
