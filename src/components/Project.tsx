import React, { useState } from "react"
import classNames from "classnames"
import { motion, Variants } from "framer-motion"
import { isMobile } from "react-device-detect"

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
const Project: React.FC<Props> = ({ project }) => {
    const [isFocused, setFocused] = useState(false)
    return (
        <motion.div
            className="w-full shadow-2xl my-12 md:mx-6 md:my-5 relative overflow-hidden"
            whileHover="hover"
            onHoverStart={() => !isMobile && setFocused(true)}
            onHoverEnd={() => !isMobile && setFocused(false)}
            tabIndex={-1}
            onFocus={() => (isMobile || process.env.NODE_ENV !== "development") && setFocused(true)}
            onBlur={() => (isMobile || process.env.NODE_ENV !== "development") && setFocused(false)}
            initial="rest"
            animate={isFocused ? "hover" : "rest"}
        >
            {/* <a href={project.links[0].url}>Hello</a> */}
            <img
                style={{ filter: isFocused ? "blur(5px)" : "none" }}
                src={project.previewImg}
                className="w-full"
                alt=""
            />
            <motion.div className={classNames("pj-overlay w-full h-full absolute")} variants={overlayMotion}>
                <div className="py-3 px-6 lg:py-4 lg:px-8 sep flex flex-col justify-center h-full">
                    <div className="pj-tags hidden md:block my-3 mb-4">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className={classNames(
                                    "tag-color-" + tag.toLowerCase(),
                                    "mr-4 py-1 px-3 text-xs lg:text-sm"
                                )}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="pj-text-content">
                        <h1
                            className="text-xl md:text-2xl lg:text-3xl font-bold font-heading"
                            style={{ color: project.title.color }}
                        >
                            {project.title.content}
                        </h1>
                    </div>
                    <p className="mt-1 text-white font-body tracking-tighter font-normal text-base lg:text-lg leading-5">
                        {project.description}
                    </p>
                    <div className="pj-link-wrapper mt-4 md:mt-8">
                        {project.links.map(link => (
                            <span key={link.type} className="mr-4">
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    <img className="inline-block w-5 md:w-6" src={link.iconUrl} alt="" />
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
