import React from "react";
import PageTransition from "./utilities/PageTransition";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MyPhoto from "@/assets/Ahnaf_Tahmid.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageTransition>
      <div className="flex sm:flex-row flex-col items-center justify-center w-full min-h-[calc(100vh-104px)] gap-5">
        <div className="flex flex-col sm:items-end items-center justify-center sm:w-1/2 w-[90%] sm:pr-15 sm:pb-0 pb-10">
          <Avatar className="w-60 h-70 sm:hover:scale-130 hover:scale-100 transition-transform duration-700 ease-in-out border-4 border-[#9daaf2] shadow-md shadow-[#9daaf2]/50">
            <AvatarImage src={MyPhoto} alt="Ahnaf" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col sm:items-start items-center justify-center sm:w-1/2 w-[90%] sm:border-l-7 sm:border-t-0 border-t-7 border-[#f4db7d] sm:pl-5 gap-5 sm:pt-0 pt-10">
          <h1 className="text-7xl font-bold text-[#9daaf2] text-left">
            Hello!
          </h1>
          <h2 className="sm:text-5xl text-4xl font-bold text-left">
            I'm <span className="text-[#ff6a3d]">Ahnaf Tahmid</span>
          </h2>
          <div className="sm:text-2xl text-xl text-left pr-5">
            I am Software Engineer who graduated with a bachelor's degree in CSE
            from BRAC University. My passion is about creating AI integrated
            software. I have worked with a few different programming languages.
            Learn more about my skills{" "}
            <Link to="/skills" className="text-[#ff6a3d]">
              here
            </Link>
            .
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
