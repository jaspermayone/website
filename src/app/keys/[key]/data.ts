// app/keys/[key]/data.ts
import { get } from "@/lib/keysIndex";

export type KeyRecord = {
  title: string;
  fingerprint: string;
  key: string;
  fileExtension: string;
};

type KeysIndex = Record<string, KeyRecord>;

export async function getKeysIndex(): Promise<KeyRecord[]> {
  const res = await get();
  const obj = JSON.parse(res.body) as KeysIndex;
  return Object.values(obj);
}

export async function getKeyByTitle(
  title: string,
): Promise<KeyRecord | undefined> {
  const res = await get();
  const obj = JSON.parse(res.body) as KeysIndex;
  return Object.values(obj).find((k) => k.title === title);
}

export function buildDirectURL(title: string) {
  // Direct link points to the actual file for immediate access
  if (title === "ssh") {
    return `/keys/jaspermayone-ssh-pub`;
  } else if (title === "gpg") {
    return `/keys/jaspermayone-gpg.gpg`;
  }
  // Fallback for any other keys
  return `/keys/jaspermayone-${encodeURIComponent(title)}.${title === "ssh" ? "pub" : "gpg"}`;
}

export function buildDownloadURL(title: string, fileExtension: string) {
  return `/keys/jaspermayone-${encodeURIComponent(title)}.${fileExtension}`;
}
