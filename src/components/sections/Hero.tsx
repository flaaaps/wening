import React from "react"
import peaceMemoji from "../../assets/peace.png"

import AnimateWhenVisible from "../AnimateWhenVisible"

const Hero: React.FC = () => {
    return (
        <AnimateWhenVisible>
            <div
                style={{ marginTop: "15vh" }}
                className="mt-0 flex md:items-center justify-center md:flex-row flex-col items-start w-10/12 mx-auto"
            >
                <img src={peaceMemoji} alt="Peace" className="xl:w-60 lg:w-56 md:w-44 w-32 mb-3 mr-5" />
                <div>
                    <h1 className="md:text-4xl lg:text-5xl 2xl:text-6xl text-4xl font-heading mb-4 tracking-tight sm:tracking-normal">
                        I’m <strong className="ml-1">Julian Wening</strong>
                    </h1>
                    <p className="leading-5 md:leading-5 max-w-lg xl:max-w-xl md:text-lg xl:leading-6 xl:text-xl font-normal text-base">
                        I’m designing and developing modern and professional websites. Whether you need an online shop,
                        a more personal website or a fully functional web application for your business, I am always at
                        your service.
                    </p>
                </div>
            </div>
        </AnimateWhenVisible>
    )
}

export default Hero
