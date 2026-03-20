import React from "react";
import PageTransition from "./utilities/PageTransition";

const Education = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-[calc(100vh-104px)] flex flex-col items-top justify-center">
        <h1 className="text-7xl font-bold">Education</h1>
        <div className="max-w-[70%] mx-auto pb-20">
          <div className="flex flex-col mt-20 items-start">
            <div className="flex sm:flex-row flex-col sm:justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2] sm:pb-0 pb-2">
                Undergraduate Degree
              </h2>
              <h2>2000 - 2024/25</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              BRAC University
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>Bachelor's in Computer Science & Engineering</li>
              <li>
                CGPA: 3.89/4.00 (Highest Distinction Honors, Vice Chancellor’s
                List - 4 times, Dean’s List - 3 times)
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex sm:flex-row flex-col sm:justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2] sm:pb-0 pb-2">A-levels</h2>
              <h2>2017 – Mar 2019</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              Hurdco International School & British Council
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>Physics (A), Maths (B), Chemistry (B)</li>
            </ul>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex sm:flex-row flex-col sm:justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2] sm:pb-0 pb-2">O-levels</h2>
              <h2>2015 – 2017</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              BAF Shaheen English Medium School
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                Mathematics (A), Additional Mathematics (A), Physics (A),
                Chemistry (A), Biology (A), English Language (B), Bengali (C)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
