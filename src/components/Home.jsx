import React from "react";
import PageTransition from "./utilities/PageTransition";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MyPhoto from "@/assets/Ahnaf_Tahmid.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageTransition>
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-104px)] gap-5">
        <div className="flex flex-col items-end justify-center w-1/2 pr-15">
          <Avatar className="w-60 h-70 hover:scale-130 transition-transform duration-700 ease-in-out border-4 border-[#9daaf2] shadow-md shadow-[#9daaf2]/50">
            <AvatarImage src={MyPhoto} alt="Ahnaf" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 border-l-7 border-[#f4db7d] pl-5 gap-5">
          <h1 className="text-7xl font-bold text-[#9daaf2] text-left">
            Hello!
          </h1>
          <h2 className="text-5xl font-bold text-left">
            I'm <span className="text-[#ff6a3d]">Ahnaf Tahmid</span>
          </h2>
          <div className="text-2xl text-left pr-5">
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
