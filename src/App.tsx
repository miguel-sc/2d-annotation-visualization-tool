import { useEffect, useState } from "react";
import "./App.css";

interface Annotation {
  annotationId: string;
  frameId: string;
}

function App() {
  const [annotations, setAnnotations] = useState<Annotation[]>();
  const frameIds = [...new Set(annotations?.map(({ frameId }) => frameId))];
  useEffect(() => {
    fetch("/data/annotations.json")
      .then((data) => data.json())
      .then((data) => setAnnotations(data.result));
  }, []);
  return (
    <div>
      {frameIds.map((frameId) => (
        <img
          className="frame-image"
          src={`/data/images/${frameId}.jpg`}
          alt="frame"
          key={frameId}
        />
      ))}
    </div>
  );
}

export default App;
