import MENU from "@/components/MENU";
import FOOTER from "@/components/FOOTER";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch with me.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <MENU pageFirstWord="Contact" />
      <main className="m-5 flex-1">
        <div>
          <p>You can email me at me [at] jaspermayone [dot] com</p>
          <p>
            {" "}
            I can also be reached on signal at{" "}
            <a
              className="underline"
              href="https://signal.me/#eu/jaspermayone.10"
            >
              @jaspermayone.10
            </a>
          </p>
          <p>
            Want my phone number? Let's be freinds first! I promise I respond
            super quick on the other platforms 😁
          </p>
        </div>

        <div>
          You can verify my identity and all the ways I might contact you by
          checking out the{" "}
          <a className="underline" href="/verify">
            /verify
          </a>{" "}
          page.
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
