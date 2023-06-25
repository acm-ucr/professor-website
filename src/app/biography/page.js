import React from "react";
import Biography from "@/data/biography";
import Tag from "@/components/Tag";
const page = () => {
  return (
    Biography && (
      <div className="w-full flex flex-col items-center my-8">
        <div className="w-10/12 flex justify-start ">
          <Tag title="Biography" />
        </div>
        {Biography.map((paragraph, index) => (
          <div
            key={index}
            className={`flex w-10/12 items-center justify-center flex-col ${
              index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {paragraph.photopath != "" && (
              <img className="w-1/2 md:w-1/4 m-3" src={paragraph.photopath} />
            )}
            <p className="text-black text-sm md:text-lg p-0 m-3">
              {paragraph.text}
            </p>
          </div>
        ))}
      </div>
    )
  );
};

export default page;
