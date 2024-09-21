// components/RoundedImage.tsx
import Image from "next/image";

interface RoundedImageProps {
  src: string;
  alt: string;
  size?: number; // Optional: diameter of the rounded image in pixels
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  alt,
  size = 150,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      aria-label={alt}
      style={{
        borderRadius: "10%",
        maxWidth: "100%",
        height: "auto"
      }} />
  );
};

export default RoundedImage;
