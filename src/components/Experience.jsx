import React from "react";
import PageTransition from "./utilities/PageTransition";

const Experience = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-[calc(100vh-104px)] flex flex-col items-top justify-center">
        <h1 className="text-7xl font-bold">Experience</h1>
        <div className="max-w-[70%] mx-auto pb-20">
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">Adjunct Lecturer</h2>
              <h2>June 2025 - October 2025</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              BRAC University
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                Conducted lab sessions for 4 different CSE courses, covering
                both software & hardware-focused topics.
              </li>
              <li>
                Evaluated student performance through lab exams, assignments, &
                continuous assessments.
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">
                Intern Software Engineer
              </h2>
              <h2>Jan 2025 – Mar 2025</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              Itransition
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                Built training projects in C# and React, gaining industry-level
                exposure to enterprise web apps.
              </li>
              <li>
                Applied modular coding practices and library integration to
                improve maintainability.
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">
                Intern Software Engineer
              </h2>
              <h2>Jul 2024 – Oct 2024</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              Vectrs
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>Worked on integrating AI (LLMs) in software products.</li>
              <li>
                Involved in debugging & fixing critical application-level
                issues.
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">
                Undergrad Teaching Assistant
              </h2>
              <h2>Sep 2022 – May 2024</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              BRAC University
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                Provided consultation & technical support to students for
                Electronic Devices & Circuits course.
              </li>
              <li>
                Graded assignments & assisted in maintaining academic
                consistency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
