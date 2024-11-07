interface ProbabilityProps {
  percentage: number;
}

const Probability: React.FC<ProbabilityProps> = ({ percentage }) => {
  const circumference = 2 * Math.PI * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <>
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="text-lg font-medium text-black dark:text-white">
          Egyezés valószínűsége
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <svg className="transform -rotate-90 w-72 h-72">
          <circle
            cx="145"
            cy="145"
            r="100"
            stroke="currentColor"
            stroke-width="30"
            fill="transparent"
            className="text-meta-4 dark:text-gray-700"
          />

          <circle
            cx="145"
            cy="145"
            r="100"
            stroke="currentColor"
            stroke-width="30"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className=" dark:text-meta-4 "
          />
        </svg>
        <span className="absolute text-5xl" x-text={percentage}>
          {percentage.toFixed(1)}%
        </span>
      </div>
    </>
  );
};

export default Probability;
