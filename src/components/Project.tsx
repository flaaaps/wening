import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { motion } from "framer-motion"

import { Project as IProject } from "../data/projects"

interface Props {
    project: IProject
}

const overlayMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "spring" },
    hover: {
        opacity: 0.9,
        top: 0,
        transition: {
            duration: 0.4,
            type: "spring",
            ease: "easeInOut",
        },
    },
}

const Project: React.FC<Props> = ({ project }) => {
    return (
        <motion.div
            className="w-full shadow-2xl my-12 md:mx-6 relative overflow-hidden"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <img src={project.previewImg} className="w-full" alt="" />
            <motion.div
                className={classNames("pj-overlay bg-gray-800 w-full h-full absolute")}
                variants={overlayMotion}
            >
                <div className="p-6">
                    <h1 className="text-white text-xl font-medium">{project.title}</h1>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Project
