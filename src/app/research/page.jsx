import Tag from "@/components/Tag";
import React from "react";
import Research from "@/data/research";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-11/12 flex justify-center items-start flex-col">
      <Tag title="Research" />
      {Research.map((research, index) => (
        <div className="my-4 w-full" key={index}>
          <p className="text-professor-blue border-b-4 border-professor-yellow w-fit text-lg md:text-xl">
            {research.title}
          </p>
          <div className="flex justify-start items-center md:items-stretch w-full flex-col md:flex-row">
            {research.image && (
              <img className="w-1/2 md:w-3/12 m-4" src={research.image} />
            )}
            <div className="flex justify-between content-between flex-col ">
              <p className="text-base md:text-lg m-4">{research.description}</p>
              <div className="w-full flex justify-end">
                {research.link && (
                  <a
                    href={research.link}
                    className="text-professor-blue no-underline flex items-center"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
