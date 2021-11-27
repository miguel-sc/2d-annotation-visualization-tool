import React, { ReactNode, useState } from "react";

export interface FrameViewerProps {
  children: ReactNode;
}

export const FrameViewer = ({ children }: FrameViewerProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
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
        disabled={currentFrameIndex === React.Children.count(children) - 1}
      >
        +
      </button>
      {React.Children.map(children, (child, frameIndex) => (
        <div
          style={{
            position: "absolute",
            opacity: frameIndex === currentFrameIndex ? 1 : 0,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
