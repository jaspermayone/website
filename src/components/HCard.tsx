import Image from "next/image";
import { getAge, links, primaryEmail, siteUrl } from "@/lib/defs";
import { pgpPublicKey, sshPublicKeys } from "@/lib/publicKeys";

// Hidden h-card microformat block (https://microformats.org/wiki/h-card)
// consumed by IndieWeb parsers, not rendered visually.
export default function HCard() {
  const age = getAge();
  return (
    <div className="h-card vcard" hidden={true}>
      {" "}
      {/* vcard class added for backward compatibility */}
      {/* === NAMES & IDENTITY === */}
      <span className="p-name fn">Jasper Mayone</span>{" "}
      {/* Full/formatted name */}
      <span className="p-given-name">Jasper</span> {/* First name */}
      <span className="p-additional-name">Devon</span> {/* Middle name(s) */}
      <abbr className="p-additional-name">D.</abbr>{" "}
      {/* Alt format for middle initial */}
      <span className="p-family-name">Mayone</span> {/* Last name */}
      <span className="p-sort-string">Mayone, Jasper</span>{" "}
      {/* How to sort alphabetically */}
      <span className="p-nickname">jaspermayone</span>{" "}
      {/* Nickname/alias/handle */}
      {/* === CONTACT INFORMATION === */}
      <a className="u-email" href={`mailto:${primaryEmail}`}>
        {primaryEmail}
      </a>
      <a className="u-url" href={siteUrl} rel="me">
        jaspermayone.com
      </a>
      {/* Social URLs dynamically generated from links in defs.ts */}
      {links.flatMap((link) =>
        link.linkrelme
          ? [
              <a
                key={link.slug}
                className="u-url"
                href={link.destination}
                rel="me"
              >
                {link.displayName || link.slug}
              </a>,
            ]
          : []
      )}
      {/* === VISUAL IDENTITY === */}
      <Image
        className="u-photo"
        src="/images/jmdark-min.webp"
        alt="Jasper Mayone"
        width={200}
        height={200}
      />{" "}
      {/* Photo */}
      {/* === PERSONAL DETAILS === */}
      <time className="dt-bday bday" dateTime="2006-08-05">
        August 5, 2006
      </time>{" "}
      {/* Birthday */}
      <time className="dt-bday bday">--08-05</time>{" "}
      {/* Birthday without year */}
      <span className="p-sex">male</span> {/* Biological sex (vCard4) */}
      <span className="p-gender-identity">he/they</span>{" "}
      {/* Gender identity (vCard4) */}
      {/* === CATEGORIES & TAGS === */}
      <span className="p-category category">programmer</span>
      <span className="p-category category">photographer</span>
      <span className="p-category category">student</span>
      <span className="p-category category">vermonter</span>
      {/* === CRYPTOGRAPHIC KEYS === */}
      <pre className="u-key key">{pgpPublicKey}</pre>
      <code className="u-key">{sshPublicKeys[0]}</code> {/* SSH key */}
      <code className="u-key">{sshPublicKeys[1]}</code> {/* SSH key */}
      {/* === UNIQUE IDENTIFIER === */}
      <data className="u-uid uid" value="https://jaspermayone.com">
        {/* Unique identifier, preferably canonical URL */}
      </data>
      {/* === BIOGRAPHICAL NOTE === */}
      <p className="p-note note">
        {age} year old college student from rural Vermont, currently residing in
        Boston. Attending Wentworth Institute of Technology as a Computer
        Science major. Treasurer of WITCC. Former Software Engineering Intern at
        Major League Hacking. Interests include aviation (glider pilot),
        photography, circus performance, and building software for communities.
      </p>
      {/* === ADDITIONAL NICKNAMES === */}
      <span className="p-nickname">jaspermayone</span>
      <span className="p-nickname">jmayone</span>
    </div>
  );
}
