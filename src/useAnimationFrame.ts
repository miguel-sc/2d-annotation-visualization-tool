import { DependencyList, useEffect, useRef } from "react";

export const useAnimationFrame = (callback: (time: number) => void, deps: DependencyList) => {
  const requestRef = useRef<number>();
  
  useEffect(() => {
    const animate = (time: number) => {
      callback(time)
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}