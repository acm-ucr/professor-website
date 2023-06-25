import Tag from "@/components/Tag";
import React from "react";
import Publications from "@/data/publications";
import { FaLink } from "react-icons/fa";

const Page = () => {
  return (
    Publications && (
      <div className="w-11/12 flex justify-center items-start flex-col">
        <Tag title="Publications" />
        {Object.keys(Publications)
          .sort((a, b) => b - a)
          .map((year, index) => (
            <div key={index} className="w-full my-4">
              <div className="bg-professor-blue border-t-8 border-professor-yellow text-center text-white text-xl md:text-2xl py-2">
                {year}
              </div>
              <div>
                <div className="w-full">
                  {Publications[year].map((publication, index) => (
                    <div
                      key={index}
                      className="odd:bg-white even:bg-professor-lightgray p-2"
                    >
                      <p className="text-base md:text-lg font-medium mb-0">
                        {publication.title}
                      </p>
                      <p className="text-sm md:text-base mb-0">
                        {publication.description}
                      </p>
                      <a
                        href={publication.link}
                        className="text-sm md:text-base font-medium no-underline flex items-center justify-start text-professor-blue"
                      >
                        <FaLink className="mr-2" />
                        Research Paper
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  );
};

export default Page;
