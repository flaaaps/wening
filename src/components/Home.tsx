import React from "react"
import styled from "styled-components"

import Nav from "./Nav"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"

interface Props {}

const LandingWrapper = styled.div`
    background: conic-gradient(from -90deg at 104.82% 95.76%, #f95d52 0deg, #f3b983 114.38deg, #f95d52 360deg);
    color: white;
`

const Landing: React.FC<Props> = () => {
    return (
        <>
            <LandingWrapper style={{ paddingBottom: "25vh" }} className="pb-0">
                <Nav />
                <Hero />
            </LandingWrapper>
            <Projects />
        </>
    )
}

export default Landing
