import { Annotation } from "./annotation";

export interface FrameProps {
  src: string;
  annotations: Annotation[];
}

export const Frame = ({ src, annotations }: FrameProps) => {
  return (
    <div className="frame">
      <img className="frame-image" src={src} alt="frame" />
      {annotations.map(({ x, y, height, width, annotationId }) => (
        <div
          className="annotation"
          key={annotationId}
          style={{ left: x, top: y, height, width }}
        />
      ))}
    </div>
  );
};
