import React from "react";
import PageTransition from "./utilities/PageTransition";

const Publications = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-[calc(100vh-104px)] flex flex-col items-top justify-center">
        <h1 className="text-7xl font-bold">Publications</h1>
        <div className="max-w-[70%] mx-auto pb-24">
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">Short Paper</h2>
              <h2>Dec 2025</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              NSysS Conference 2025
            </h3>
            <div className="mt-4 text-left">
              Tahmid, A., Mohammad, N., Zamil, R., Mubin, M. M., Islam, M. F.,
              and Noor, J. "Analyzing Neural Network Models for Detecting Panic
              Attacks with Uncertainty Analysis." Short Paper presented at NSysS
              2025, Sylhet, Bangladesh, December 2025.{" "}
              <a
                href="https://doi.org/10.1145/3777555.3777571"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                DOI
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">Undergraduate Thesis</h2>
              <h2>Jan 2024</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              BRAC University
            </h3>
            <div className="mt-4 text-left">
              Tahmid, A., Mohammad, N., Zamil, R., Mubin, M. M., Islam, M. F.,
              and Noor, J. "Analyzing Neural Network Models for Detecting Panic
              Attacks with Uncertainty Analysis.{" "}
              <a
                href="http://hdl.handle.net/10361/22773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                View Paper
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-20 items-start">
            <div className="flex justify-between w-full">
              <h2 className="text-3xl text-[#9daaf2]">Poster</h2>
              <h2>Dec 2023</h2>
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d]">
              NSysS Conference 2023
            </h3>
            <div className="mt-4 text-left">
              Tahmid, A., Zamil, R., Mubin, M. M., Mohammad, N., and Noor, J.
              "Proposing a Neural Network Based Solution For Detecting Panic
              Attacks." Poster presented at NSysS 2023, Dhaka, Bangladesh,
              December 2023.{" "}
              <a
                href="http://dx.doi.org/10.13140/RG.2.2.32543.94880"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                DOI
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Publications;
