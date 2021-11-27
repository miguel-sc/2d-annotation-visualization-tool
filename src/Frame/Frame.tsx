import { Annotation } from "../annotation";
import styles from "./Frame.module.css";

export interface FrameProps {
  src: string;
  annotations: Annotation[];
}

export const Frame = ({ src, annotations }: FrameProps) => {
  return (
    <div className={styles.frame}>
      <img src={src} alt="frame" className={styles.frameImage} />
      {annotations.map(({ x, y, height, width, annotationId }) => (
        <div
          className={styles.annotation}
          key={annotationId}
          style={{ left: x, top: y, height, width }}
        />
      ))}
    </div>
  );
};
