import React from "react";

interface CodingSoonProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CodingSoon = ({
  text = "Coding soon",
  className = "",
  style = {},
}: CodingSoonProps) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 style={style} className="text-6xl md:text-8xl font-bold text-[#F9FAFB] mb-4">
        <span className="typing-animation inline-block">{text}</span>
      </h1>
    </div>
  );
};

export default CodingSoon;
