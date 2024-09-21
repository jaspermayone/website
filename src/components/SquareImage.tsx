// components/RoundedImage.tsx
import Image from "next/legacy/image";

interface SquareImageImageProps {
  src: string;
  alt: string;
  size?: number; // Optional: diameter of the rounded image in pixels
}

const SquareImage: React.FC<SquareImageImageProps> = ({
  src,
  alt,
  size = 150,
}) => {
  return (
    <Image src={src} alt={alt} width={size} height={size} aria-label={alt} />
  );
};

export default SquareImage;
