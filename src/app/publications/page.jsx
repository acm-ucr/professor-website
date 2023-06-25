import Tag from "@/components/Tag";
import React from "react";
import Publications from "@/data/publications";

const Page = () => {
  return (
    <div className="w-11/12 flex justify-center items-start flex-col">
      <Tag title="Publications" />
      {Object.keys(Publications)
        .sort((a, b) => b - a)
        .map((year, index) => (
          <div key={index}>
            <div>{year}</div>

            <div>
              {Publications[year].map((publication, index) => (
                <div key={index}>
                  <p>{publication.title}</p>
                  <p>{publication.description}</p>
                  <a href={publication.link}>Research Paper</a>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
