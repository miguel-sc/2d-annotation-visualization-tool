import "./App.css";
import { Frame } from "./Frame";
import { useAnnotations } from "./useAnnotations";

function App() {
  const { frameIds, annotationsByFrameId } = useAnnotations();
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
