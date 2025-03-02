import React, { useEffect } from "react";
import Title from "../Title/Title";

const JobCategory = () => {
  
  return (
    <div className="pt-20 pb-12">
      <Title
        mainHeading="Popular Job Categories"
        subHeading="2025 jobs live - 293 added today"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        <div className="p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className="flex items-center space-x-4">
            <img src="" alt="img" width={60} height={60}/>
            <div>
              <h1 className="text-[17px] font-semibold mb-[0.4rem]">raja</h1>
              <p className="text-[14px] text-black font-semibold text-opacity-50">fnddjg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
