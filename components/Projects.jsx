import React from "react";
import twitter from "../public/assets/twitter.png";
import ProjectItem from "./ProjectItem";
import todo from "../public/assets/todo.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase py-8">
          Missions Completed
        </p>
        <div className="items-center grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Twitter Clone"
            backgroundImg={twitter}
            projectUrl="/clone"
          />
      <ProjectItem
        title="To-Do App"
        backgroundImg={todo}
        projectUrl="/todoApp"
      />
        </div>
      </div>
    </div>
  );
};

export default Projects;
