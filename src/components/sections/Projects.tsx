import React from "react"
import hello from "../../assets/hello.png"
import Project from "../Project"

import AnimateWhenVisible from "../AnimateWhenVisible"

import { data as projectsData } from "../../data/projects"

const Projects: React.FC = () => {
    return (
        <div>
            <div className="projects-clip-path mb-4"></div>
            <AnimateWhenVisible
                variants={{
                    visible: { x: -50, transition: { type: "spring", bounce: 0.3, delay: 1 } },
                    hidden: { x: -200 },
                }}
                className="mt-12"
                whileHover={{ x: 0 }}
            >
                <img src={hello} className="lg:w-36 sm:w-24 w-0 absolute" alt="Peace" />
            </AnimateWhenVisible>

            <div
                id="projects"
                className="projects-content pb-72 mt-12 w-11/12 sm:w-1/2 lg:w-3/4 lg:flex lg:justify-between xl:w-4/6 mx-auto box-border"
            >
                {projectsData.map(project => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    )
}

export default Projects
