import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation, Variants } from "framer-motion"

type Props = {
    variants: Variants
    className?: string
}

const AnimateWhenVisible: React.FC<Props> = ({ children, variants, className }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{ ...variants }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimateWhenVisible
