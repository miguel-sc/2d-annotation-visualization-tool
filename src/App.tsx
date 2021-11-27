import { Frame } from "./Frame/Frame";
import { FrameViewer } from "./FrameViewer/FrameViewer";
import { useAnnotations } from "./annotations/useAnnotations";

function App() {
  const { frameIds, annotationsByFrameId } = useAnnotations();
  return (
    <div>
      <FrameViewer>
        {frameIds.map((frameId) => (
          <Frame
            key={frameId}
            src={`/data/images/${frameId}.jpg`}
            annotations={annotationsByFrameId[frameId]}
          />
        ))}
      </FrameViewer>
    </div>
  );
}

export default App;
