import { useState } from "react";
import { Frame } from "./Frame/Frame";
import { useAnnotations } from "./useAnnotations";

function App() {
  const { frameIds, annotationsByFrameId } = useAnnotations();
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
        disabled={currentFrameIndex === frameIds.length - 1}
      >
        +
      </button>
      {frameIds.map((frameId, frameIndex) => (
        <div
          style={{
            position: "absolute",
            opacity: frameIndex === currentFrameIndex ? 1 : 0,
          }}
        >
          <Frame
            key={frameId}
            src={`/data/images/${frameId}.jpg`}
            annotations={annotationsByFrameId[frameId]}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
