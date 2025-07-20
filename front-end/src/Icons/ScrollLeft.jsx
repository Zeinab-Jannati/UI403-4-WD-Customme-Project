const ScrollLeft = () => {
  const baseColor = "var(--color-primary-tint-3)";
  const strokeWidth = "1";

  return (
    <div className="group w-fit cursor-pointer">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-all duration-300 ease-in-out"
      >
        <path
          d="M9.99953 13.7797C9.87286 13.7797 9.7462 13.733 9.6462 13.633L5.29953 9.28637C4.59286 8.57971 4.59286 7.41971 5.29953 6.71304L9.6462 2.36637C9.83953 2.17304 10.1595 2.17304 10.3529 2.36637C10.5462 2.55971 10.5462 2.87971 10.3529 3.07304L6.0062 7.41971C5.6862 7.73971 5.6862 8.25971 6.0062 8.57971L10.3529 12.9264C10.5462 13.1197 10.5462 13.4397 10.3529 13.633C10.2529 13.7264 10.1262 13.7797 9.99953 13.7797Z"
          stroke={baseColor}
          strokeWidth={strokeWidth}
          fill="currentColor"
          className="transition-all group-hover:fill-[var(--color-primary)]"
        />
      </svg>
    </div>
  );
};

export default ScrollLeft;
