const RatingStars = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return <div className="flex items-center gap-1 rtl:space-x-reverse">
      {[...Array(totalStars)].map((_, i) => {
        if (i < fullStars) {
          // ستاره پر
          return (
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--color-state-w-light)"
                className="w-4 h-4"
            >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.781 1.401 8.172L12 18.897l-7.335 3.867 1.401-8.172L.132 9.211l8.2-1.193L12 .587z" />
            </svg>
          );
        } else if (i === fullStars && hasHalfStar) {
          // ستاره نیمه‌پر
          return (
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                >
                <defs>
                    <linearGradient id={`half-gradient-${i}`}>
                    <stop offset="50%" stopColor="var(--color-state-w-light)" />
                    <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.781 1.401 8.172L12 18.897l-7.335 3.867 1.401-8.172L.132 9.211l8.2-1.193L12 .587z"
                    fill={`url(#half-gradient-${i})`}
                    stroke="#facc15"
                    strokeWidth="2"
                />
                </svg>
            );
        } else {
          // ستاره خالی
          return (
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="var(--color-state-w-light)"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4"
            >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.781 1.401 8.172L12 18.897l-7.335 3.867 1.401-8.172L.132 9.211l8.2-1.193L12 .587z" />
            </svg>
          );
        }
      })}
    </div>
};
 
export default RatingStars;