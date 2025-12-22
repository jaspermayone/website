import Image from "next/image";

interface RoundedImageProps {
  src;
  alt: string;
  size: number;
  loading?: "lazy" | "eager";
  isPriority?: boolean;
  transitionName?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  alt,
  size,
  loading,
  isPriority = false,
  transitionName,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading={isPriority ? undefined : loading} // Remove loading prop when priority is true
      placeholder="blur"
      priority={isPriority}
      className="rounded-[10%] border-2 border-dotted border-stone-950 dark:border-stone-50"
      style={{
        maxWidth: "100%",
        height: "auto",
        viewTransitionName: transitionName,
      }}
    />
  );
};

export default RoundedImage;
