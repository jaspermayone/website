import Image from "next/image";

interface RoundedImageProps {
  src: string;
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
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      aria-label={alt}
      loading={isPriority ? undefined : loading} // Remove loading prop when priority is true
      priority={isPriority}
      className="border-2 border-dotted border-stone-950 dark:border-stone-50 rounded-[10%]"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default RoundedImage;
