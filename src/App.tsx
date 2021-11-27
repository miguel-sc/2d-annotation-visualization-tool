import { useEffect, useState } from "react";
import { Annotation } from "./annotation";
import "./App.css";
import { Frame } from "./Frame";
import { groupBy } from "./groupBy";

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
        <Frame
          key={frameId}
          src={`/data/images/${frameId}.jpg`}
          annotations={annotationsByFrameId[frameId]}
        />
      ))}
    </div>
  );
}

export default App;
