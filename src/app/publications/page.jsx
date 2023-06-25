import Tag from "@/components/Tag";
import React from "react";
import Publications from "@/data/publications";
import { FaLink } from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-11/12 flex justify-center items-start flex-col">
      <Tag title="Publications" />
      {Object.keys(Publications)
        .sort((a, b) => b - a)
        .map((year, index) => (
          <div key={index} className="w-full">
            <div className="bg-professor-blue border-t-8 border-professor-yellow text-center text-white text-2xl py-2">
              {year}
            </div>
            <div>
              {Publications[year].map((publication, index) => (
                <div key={index} className={``}>
                  <p className="font-medium mb-0">{publication.title}</p>
                  <p className="mb-0">{publication.description}</p>
                  <a
                    href={publication.link}
                    className="font-medium no-underline flex items-center justify-start"
                  >
                    <FaLink className="mr-2" />
                    Research Paper
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
