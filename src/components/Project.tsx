import React from "react"
import classNames from "classnames"
import { motion, Variants } from "framer-motion"

import { Project as IProject } from "../data/projects"

interface Props {
    project: IProject
}

const overlayMotion: Variants = {
    rest: { opacity: 0, transition: { ease: "easeOut", duration: 0.2 }, type: "spring" },
    hover: {
        opacity: 0.9,
        top: 0,

        transition: {
            duration: 0.3,
            bounce: 0.15,
            delay: 0.1,
            type: "spring",
        },
    },
}

const imgMotion: Variants = {
    rest: { filter: "none" },
    hover: {
        filter: "blur(5px)",
        transition: {
            duration: 0.2,
        },
    },
}

const Project: React.FC<Props> = ({ project }) => {
    return (
        <motion.div
            className="w-full shadow-2xl my-12 md:mx-6 md:my-5 relative overflow-hidden"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <motion.img src={project.previewImg} variants={imgMotion} className="w-full" alt="" />
            <motion.div className={classNames("pj-overlay w-full h-full absolute")} variants={overlayMotion}>
                <div className="py-6 px-12">
                    <div className="pj-tags my-3 mb-6">
                        {project.tags.map(tag => (
                            <span className={classNames("tag-color-" + tag.toLowerCase(), "mr-4 py-1 px-3 text-sm")}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold font-heading" style={{ color: project.title.color }}>
                        {project.title.content}
                    </h1>
                    <p className="mt-2 text-white font-body tracking-tighter font-normal text-lg leading-5">
                        {project.description}
                    </p>
                    <div className="pj-link-wrapper mt-3">
                        {project.links.map(link => (
                            <span className="mr-4">
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    <img className="inline-block" src={link.iconUrl} alt="" />
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Project
