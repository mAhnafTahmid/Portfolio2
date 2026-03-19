import React from "react";
import PageTransition from "./utilities/PageTransition";

const Projects = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-[calc(100vh-104px)] flex flex-col items-top justify-center">
        <h1 className="text-7xl font-bold">Projects</h1>
        <div className="max-w-[70%] mx-auto pb-20">
          <div className="flex flex-col mt-20 items-start">
            <h2 className="text-3xl text-[#9daaf2]">
              Retrival Augmented Generation Chatbot Website
            </h2>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d] text-left">
              Solves the problem of LLMs generating incorrect information due to
              limited training data by integrating a retrieval system that
              provides accurate data to the model, enhancing response
              reliability.
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                It is a Chatbot Website were you can ask the LLM questions
                regarding a particular document that was stored in a Vector
                database or also ask general questions.
              </li>
              <li>
                Focuses on AI integration and backend development using Python,
                Django, Hugging Face, React, Pinecone and Langchain to create a
                robust RAG system.
              </li>
              <li>
                Link:{" "}
                <a
                  href="https://github.com/mAhnafTahmid/RAG_Website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://github.com/mAhnafTahmid/RAG_Website.git
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mt-20 items-start">
            <h2 className="text-3xl text-[#9daaf2]">Real-time Chat Website</h2>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d] text-left">
              Solves the problem of communicating in real-time through text
              messages.
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                It is a Chat Website were you can signup and chat with other
                users in real-time.
              </li>
              <li>
                Focuses on full-stack development and real-time communication
                using Node JS, Express JS, Socket.io, MongoDB and React to
                create a real-time chat website.
              </li>
              <li>
                Link:{" "}
                <a
                  href="https://github.com/mAhnafTahmid/Chat-App.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://github.com/mAhnafTahmid/Chat-App.git
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mt-20 items-start">
            <h2 className="text-3xl text-[#9daaf2]">Form Generation Website</h2>
            <h3 className="text-2xl font-semibold mt-2 text-[#ff6a3d] text-left">
              Solves the problem of generating online digital forms.
            </h3>
            <ul className="mt-4 list-disc list-inside text-left">
              <li>
                It is a Form Generation Website were users can create forms and
                others can fill it up and the creator of the form can check the
                submitted forms.
              </li>
              <li>
                Focuses on backend development using C# (.net core), PostgreSQL,
                React, to create a form generation website with user
                authentication and form management features.
              </li>
              <li>
                Link:{" "}
                <a
                  href="https://github.com/mAhnafTahmid/ItransitionProject.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://github.com/mAhnafTahmid/ItransitionProject.git
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
