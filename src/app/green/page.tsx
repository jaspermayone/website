import MENU from "@/components/MENU";
import { Metadata } from "next";
import FOOTER from "@/components/FOOTER";

export const metadata: Metadata = {
  title: "Green",
  description: "How I try to live sustainably.",
};

export default function Green() {
  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Green" />
      <main className="m-5 flex-1">
        <p>
          I love the environment! I'm a big fan of green energy and
          sustainability. I'm always looking for ways to reduce my carbon
          footprint and make a positive impact on the planet.
        </p>
        <p>
          My house has solar panels and we also store that energy in battieries
          in case of a power outage.
        </p>
        <p>
          I always love seeing cool sustainibility and green projects. If you
          find one or are working on one, please let me know! My contact info is
          on the{" "}
          <a href="/contact" className="underline">
            contact
          </a>{" "}
          page and has all the ways I can be reached.
        </p>
      </main>
      <FOOTER />
    </div>
  );
}
