import React from "react";

const Tag = ({ title }) => {
  return (
    <div className="border-l-8 border-professor-yellow bg-professor-blue px-6 py-2 w-fit text-white text-2xl font-medium">
      {title}
    </div>
  );
};

export default Tag;
