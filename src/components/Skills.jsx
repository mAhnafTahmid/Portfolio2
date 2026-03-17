import React from "react";
import PageTransition from "./utilities/PageTransition";

const Skills = () => {
  const languages = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  const frameworksAndTools = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Quarkus",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",
    },

    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    { name: "DaisyUI", icon: "https://cdn.simpleicons.org/daisyui" },

    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },

    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
    { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
    {
      name: "Pinecone",
      icon: "https://vectorseek.com/wp-content/uploads/2023/09/Pinecone-Icon-Logo-Vector.svg-.png",
    },

    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    { name: "Render", icon: "https://cdn.simpleicons.org/render" },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const databases = [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <PageTransition>
      <div className="flex flex-col items-top justify-top w-full min-h-[calc(100vh-104px)] pt-7">
        <h1 className="text-7xl font-bold">
          Check out my <span className="text-[#ff6a3d]">tech stack</span>!
        </h1>
        <div className="flex flex-col mt-20 items-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#9daaf2]">
            Languages
          </h2>
          <div className="flex flex-wrap gap-10 max-w-1/2 items-center justify-center">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center gap-2 hover:scale-140 transition-transform duration-800 ease-in-out min-w-30 min-h-30"
              >
                <img src={lang.icon} alt={lang.name} className="w-20 h-20" />
                <h3>{lang.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-20 items-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#9daaf2]">
            Frameworks & Tools
          </h2>
          <div className="flex flex-wrap gap-10 max-w-1/2 items-center justify-center">
            {frameworksAndTools.map((fat) => (
              <div
                key={fat.name}
                className="flex flex-col items-center gap-2 hover:scale-140 transition-transform duration-800 ease-in-out min-w-30 min-h-30"
              >
                <img src={fat.icon} alt={fat.name} className="w-20 h-20" />
                <h3>{fat.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-20 items-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#9daaf2]">
            Databases
          </h2>
          <div className="flex flex-wrap gap-10 max-w-1/2 items-center justify-center">
            {databases.map((db) => (
              <div
                key={db.name}
                className="flex flex-col items-center gap-2 hover:scale-140 transition-transform duration-800 ease-in-out min-w-30 min-h-30"
              >
                <img src={db.icon} alt={db.name} className="w-20 h-20" />
                <h3>{db.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
