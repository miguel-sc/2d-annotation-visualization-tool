import { useEffect, useState } from "react";
import "./App.css";
import { groupBy } from "./groupBy";

interface Annotation {
  annotationId: string;
  frameId: string;
  x: number;
  y: number;
  height: number;
  width: number;
}

function App() {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const annotationsByFrameId = groupBy(annotations, ({ frameId }) => frameId);
  const frameIds = [...new Set(annotations.map(({ frameId }) => frameId))];
  useEffect(() => {
    fetch("/data/annotations.json")
      .then((data) => data.json())
      .then((data) => setAnnotations(data.result));
  }, []);
  return (
    <div>
      {frameIds.map((frameId) => (
        <div className="frame" key={frameId}>
          <img
            className="frame-image"
            src={`/data/images/${frameId}.jpg`}
            alt="frame"
          />
          {annotationsByFrameId[frameId].map(
            ({ x, y, height, width, annotationId }) => (
              <div
                className="annotation"
                key={annotationId}
                style={{ left: x, top: y, height, width }}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
