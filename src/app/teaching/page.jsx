import Tag from "@/components/Tag";
import React from "react";
import Teaching from "@/data/teaching";

const Page = () => {
  return (
    Teaching && (
      <div className="w-11/12 flex justify-center items-start flex-col">
        <Tag title="Teaching" />
        <table className="w-full my-4 shadow">
          <thead>
            <tr className="bg-professor-blue w-full text-white font-medium text-xl text-center">
              <th></th>
              <th>Fall</th>
              <th>Winter</th>
              <th>Spring</th>
              <th>Summer</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Teaching)
              .sort((a, b) => b - a)
              .map((year, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-professor-lightgray"
                  } text-center`}
                >
                  <td className="py-4 text-center flex justify-center">
                    <p className="text-professor-blue border-b-4 border-professor-yellow font-medium w-fit text-xl mb-0">
                      {year}
                    </p>
                  </td>
                  {Object.keys(Teaching[year]).map((term, index) => (
                    <td key={index}>
                      {Teaching[year][term].map((cls, index) => (
                        <p key={index} className="mb-0 my-1">
                          {cls}
                        </p>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Page;
