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
      style={{ borderRadius: "15%" }}
    />
  );
};

export default RoundedImage;
