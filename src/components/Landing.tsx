import React from "react"
import styled from "styled-components"

import peaceMemoji from "../assets/peace.png"
import Nav from "./Nav"

interface Props {}

const LandingWrapper = styled.div`
    background: conic-gradient(from -90deg at 104.82% 95.76%, #f95d52 0deg, #f3b983 114.38deg, #f95d52 360deg);
    color: white;
`

const Landing: React.FC<Props> = () => {
    return (
        <LandingWrapper className="2xl:h-screen" style={{ paddingBottom: "15vh" }}>
            <Nav />
            <div
                style={{ marginTop: "15vh" }}
                className="flex md:items-center justify-center md:flex-row flex-col items-start w-10/12 mx-auto"
            >
                <img src={peaceMemoji} alt="Peace" className="xl:w-64 lg:w-56 md:w-44 w-32 mb-3 mr-5" />
                <div>
                    <h1 className="md:text-4xl lg:text-5xl 2xl:text-7xl text-4xl font-heading mb-3">
                        I’m <strong>Julian Wening</strong>
                    </h1>
                    <p className="leading-5 md:leading-5 max-w-lg md:text-lg text-base">
                        I’m designing and developing modern and professional websites. Whether you need an online shop,
                        a more personal website or a fully functional web application for your business, I am always at
                        your service.
                    </p>
                </div>
            </div>
        </LandingWrapper>
    )
}

export default Landing
