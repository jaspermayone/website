export default function WavyDivider() {
  return (
    <div className="-mt-2.5 mb-2">
      <svg
        className="h-7 w-full"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 Q 100 24, 200 12 T 400 12 T 600 12 T 800 12 T 1000 12 T 1200 12"
          fill="none"
          stroke="#56ba8e"
          strokeWidth="2"
          className="dark:stroke-blue-400"
        />
      </svg>
    </div>
  );
}
