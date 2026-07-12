export default function ReadingProgressBar({ progress }) {
  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-[76px] z-[60] h-[2px]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}