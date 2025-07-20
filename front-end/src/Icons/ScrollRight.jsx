const ScrollRight = () => {
    const baseColor = "var(--color-primary-tint-3)";
    const strokeWidth = "1";
    return ( 
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-all duration-300 ease-in-out">
            <path 
                d="M5.93974 13.7797C5.81307 13.7797 5.68641 13.733 5.58641 13.633C5.39307 13.4397 5.39307 13.1197 5.58641 12.9264L9.93307 8.57971C10.2531 8.25971 10.2531 7.73971 9.93307 7.41971L5.58641 3.07304C5.39307 2.87971 5.39307 2.55971 5.58641 2.36637C5.77974 2.17304 6.09974 2.17304 6.29307 2.36637L10.6397 6.71304C10.9797 7.05304 11.1731 7.51304 11.1731 7.99971C11.1731 8.48637 10.9864 8.94637 10.6397 9.28637L6.29307 13.633C6.19307 13.7264 6.06641 13.7797 5.93974 13.7797Z"
                stroke={baseColor}
                strokeWidth={strokeWidth}
                fill="currentColor"
                className="transition-all group-hover:fill-[var(--color-primary)]"
            />
        </svg>

     );
}
 
export default ScrollRight;