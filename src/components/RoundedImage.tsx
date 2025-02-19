// components/RoundedImage.tsx
import Image from "next/image";

interface RoundedImageProps {
  src: string;
  alt: string;
  size: number;
  loading?: "lazy" | "eager";
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  alt,
  size,
  loading,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      aria-label={alt}
      loading={loading}
      className="border-2 border-dotted border-stone-950 dark:border-stone-50"
      style={{
        borderRadius: "10%",
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default RoundedImage;
