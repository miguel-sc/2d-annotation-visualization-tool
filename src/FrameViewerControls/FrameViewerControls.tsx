import styles from "./FrameViewerControls.module.css";

interface FrameViewerControlsProps {
  value: number;
  maxValue: number;
  onChange: (frameNumber: number) => void;
}

export const FrameViewerControls = ({
  value,
  maxValue,
  onChange,
}: FrameViewerControlsProps) => {
  return (
    <div className={styles.frameViewerControls}>
      <div className={styles.frameViewerControlsInnerContainer}>
        <button onClick={() => onChange(value - 1)} disabled={value === 0}>
          -
        </button>
        <input
          type="range"
          id="frameNumber"
          name="frameNumber"
          min={0}
          max={maxValue}
          value={value}
          className={styles.frameRangeSlider}
          aria-label="frame number"
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <button
          onClick={() => onChange(value + 1)}
          disabled={value === maxValue}
        >
          +
        </button>
      </div>
    </div>
  );
};
