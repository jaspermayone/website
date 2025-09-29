// app/keys/[key]/page.tsx
import FOOTER from "@/components/FOOTER";
import MENU from "@/components/MENU";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "./CopyButton";
import {
  buildDirectURL,
  buildDownloadURL,
  getKeyByTitle,
  getKeysIndex,
} from "./data";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const keys = await getKeysIndex();
  return keys.map((k) => ({ key: k.title }));
}

export const revalidate = false;

export default async function Page({ params }: { params: { key: string } }) {
  const record = await getKeyByTitle(params.key);
  if (!record) notFound();

  const { title, fingerprint, key, fileExtension } = record;
  const directURL = buildDirectURL(title);
  const downloadURL = buildDownloadURL(title, fileExtension);

  return (
    <div className="h-screen flex flex-col">
      <MENU
        pageFirstWord="Keys"
        pageSecondWord="~"
        pageThirdWord={`${title}`}
      />
      <main className="m-5 flex-1 overflow-hidden flex flex-col">
        <div className={styles.container}>
          <h2>{title}</h2>
          <p className={styles.paragraph}>Fingerprint: {fingerprint}</p>

          <p className={styles.paragraph}>
            Direct link: <Link href={directURL}>{directURL}</Link>
          </p>

          <div className={styles.actions}>
            <CopyButton label="Copy public key" valueToCopy={key} />
            <Link href={downloadURL}>
              <button className={styles.downloadBtn}>
                Download public key
              </button>
            </Link>
          </div>
        </div>
      </main>
      <FOOTER />
    </div>
  );
}
