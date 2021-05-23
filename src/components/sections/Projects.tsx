import React from "react"
import hello from "../../assets/hello.png"
import Project from "../Project"

import { data as projectsData } from "../../data/projects"

interface Props {}

const Projects = (props: Props) => {
    return (
        <div>
            <div className="projects-clip-path mb-12"></div>
            <img src={hello} className="lg:w-36 md:w-28 w-0 absolute" alt="Peace" />
            <h1 className="text-center text-3xl font-semibold text-gray-700">Recent projects</h1>
            <div className="projects-content pb-40 mt-3 w-3/4 md:flex md:justify-between mx-auto box-border">
                {projectsData.map(project => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    )
}

export default Projects
