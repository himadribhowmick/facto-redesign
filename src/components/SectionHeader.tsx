import  { type ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, description }) => {
  return (
    <div className="text-center flex flex-col items-center gap-2">
      {badge && (
        <span className="inline-block bg-light-bg text-primary text-sm px-4 py-1 rounded-full font-body">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-[56px] font-heading font-bold leading-tight text-heading">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg md:text-[24px] font-body text-body max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;