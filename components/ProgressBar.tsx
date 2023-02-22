import React from "react";

interface ProgressData {
  technology: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressData> = ({ technology, percentage }) => {
  const [style, setStyle] = React.useState<object>({});

  setTimeout(() => {
    const newStyle = { opacity: 1, width: `${percentage}%` };
    setStyle(newStyle);
  }, 1000);
  return (
    <div className="relative my-4">
      <div className="px-2 flex justify-between text-[18px] font-alclonica my-2">
        <p>{technology}</p>
        <p>{percentage}%</p>
      </div>
      <div className="h-[20px] w-full rounded-full bg-white relative">
        <div className="h-full bg-charcoal rounded-full" style={style}></div>
      </div>
    </div>
  )
};

export default ProgressBar;