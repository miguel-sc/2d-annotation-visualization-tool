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
    <div>
      <button onClick={() => onChange(value - 1)} disabled={value === 0}>
        -
      </button>
      <button onClick={() => onChange(value + 1)} disabled={value === maxValue}>
        +
      </button>
      <div>
        <input
          type="range"
          id="frameNumber"
          name="frameNumber"
          min={0}
          max={maxValue}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <label htmlFor="frameNumber">Frame number</label>
      </div>
    </div>
  );
};
