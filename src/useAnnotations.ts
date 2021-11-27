import { useState, useEffect } from "react";
import { Annotation } from "./annotation";
import { groupBy } from "./groupBy";

export const useAnnotations = () => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const annotationsByFrameId = groupBy(annotations, ({ frameId }) => frameId);
  const frameIds = [...new Set(annotations.map(({ frameId }) => frameId))];

  useEffect(() => {
    fetch("/data/annotations.json")
      .then((data) => data.json())
      .then((data) => setAnnotations(data.result));
  }, []);

  return { annotationsByFrameId, frameIds };
};
