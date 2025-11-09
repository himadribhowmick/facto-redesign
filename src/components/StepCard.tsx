import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

interface StepCardProps {
  bgColor: string;
  highlightContent: ReactNode;
  subtitle: ReactNode; // allow JSX now
  description: string;
  points: string[];
}

const StepCard: React.FC<StepCardProps> = ({
  bgColor,
  highlightContent,
  subtitle,
  description,
  points,
}) => {
  return (
    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
      <div className={`${bgColor} p-6 rounded-xl flex flex-col gap-4 min-h-[280px] md:min-h-[300px]`}>
        {highlightContent}
      </div>

      <h3 className="text-xl font-semibold">{subtitle}</h3>
      <p className="text-gray-600 text-base">{description}</p>

      <ul className="text-sm text-gray-700 space-y-2">
        {points.map((text, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-light">
              <FaCheck className="text-primary text-xs" />
            </div>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepCard;