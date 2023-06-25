import React from "react";
import biography from "@/data/biography";
import Tag from "@/components/Tag";
const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-10/12 flex justify-start m-8">
        <Tag title="Biography" />
      </div>
      {biography.map((paragraph, index) => (
        <div
          key={index}
          className={`flex w-10/12 items-center justify-center ${
            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {paragraph.photopath != "" && (
            <img className="w-1/4 m-3" src={paragraph.photopath} />
          )}
          <p className="text-black text-lg p-0 m-3">{paragraph.text}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
