import React, { ReactNode, useState } from "react";
import { FrameViewerControls } from "../FrameViewerControls/FrameViewerControls";
import styles from "./FrameViewer.module.css";

export interface FrameViewerProps {
  children: ReactNode;
}

export const FrameViewer = ({ children }: FrameViewerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const numberOfFrames = React.Children.count(children);
  return (
    <div>
      <FrameViewerControls
        value={currentFrameIndex}
        maxValue={numberOfFrames - 1}
        onChange={setCurrentFrameIndex}
      />
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
