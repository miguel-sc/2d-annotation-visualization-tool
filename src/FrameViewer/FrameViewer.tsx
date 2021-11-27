import React, { ReactNode, useState } from "react";
import { FrameViewerControls } from "../FrameViewerControls/FrameViewerControls";
import styles from "./FrameViewer.module.css";

export interface FrameViewerProps {
  children: ReactNode;
  width: number;
  height: number;
}

const imgNaturalWidth = 3856;
const imgNaturalHeight = 1936;

export const FrameViewer = ({ children, width, height }: FrameViewerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const numberOfFrames = React.Children.count(children);
  const scale = Math.min(width / imgNaturalWidth, height / imgNaturalHeight);
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
