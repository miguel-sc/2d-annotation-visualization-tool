import React, { ReactNode, useState } from "react";
import styles from "./FrameViewer.module.css";

export interface FrameViewerProps {
  children: ReactNode;
}

export const FrameViewer = ({ children }: FrameViewerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const numberOfFrames = React.Children.count(children);
  return (
    <div>
      <button
        onClick={() => setCurrentFrameIndex((index) => index - 1)}
        disabled={currentFrameIndex === 0}
      >
        -
      </button>
      <button
        onClick={() => setCurrentFrameIndex((index) => index + 1)}
        disabled={currentFrameIndex === numberOfFrames - 1}
      >
        +
      </button>
      <div>
        <input
          type="range"
          id="frameNumber"
          name="frameNumber"
          min={0}
          max={numberOfFrames - 1}
          value={currentFrameIndex}
          onChange={(e) => setCurrentFrameIndex(Number(e.target.value))}
        />
        <label htmlFor="frameNumber">Frame number</label>
      </div>
      {React.Children.map(children, (child, frameIndex) => (
        <div
          className={styles.frameContainer}
          style={{ opacity: frameIndex === currentFrameIndex ? 1 : 0 }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
