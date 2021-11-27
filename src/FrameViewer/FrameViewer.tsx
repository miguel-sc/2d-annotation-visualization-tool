import React, { ReactNode, useState } from "react";
import { FrameViewerControls } from "../FrameViewerControls/FrameViewerControls";
import styles from "./FrameViewer.module.css";

export interface FrameViewerProps {
  children: ReactNode;
}

// hardcoded image width. should get that from the image onLoad event.
const imgNaturalWidth = 3856;

export const FrameViewer = ({ children }: FrameViewerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const numberOfFrames = React.Children.count(children);
  const scale = window.innerWidth / imgNaturalWidth;
  return (
    <div>
      <FrameViewerControls
        value={currentFrameIndex}
        maxValue={numberOfFrames - 1}
        onChange={setCurrentFrameIndex}
      />
      <div className={styles.frames} style={{ transform: `scale(${scale})` }}>
        {React.Children.map(children, (child, frameIndex) => (
          <div
            className={styles.frameContainer}
            style={{ opacity: frameIndex === currentFrameIndex ? 1 : 0 }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
