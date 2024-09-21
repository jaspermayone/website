import Image from "next/image";
import styles from "@/styles/PhotoGrid.module.css";

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className={styles.grid}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photo}>
          {" "}
          {/* Add key here */}
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            aria-label={photo.alt}
            sizes="100vw"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
