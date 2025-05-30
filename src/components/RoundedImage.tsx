import Image from "next/image";
import Head from "next/head";

interface RoundedImageProps {
  src;
  alt: string;
  size: number;
  loading?: "lazy" | "eager";
  isPriority?: boolean;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  alt,
  size,
  loading,
  isPriority = false,
}) => {
  return (
    <>
      <Head>
        <link rel="preload" href={src} as="image" />
      </Head>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        aria-label={alt}
        loading={isPriority ? undefined : loading} // Remove loading prop when priority is true
        placeholder="blur"
        priority={isPriority}
        className="border-2 border-dotted border-stone-950 dark:border-stone-50 rounded-[10%]"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </>
  );
};

export default RoundedImage;
