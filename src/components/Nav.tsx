import React from "react"
import styled from "styled-components"

const Nav: React.FC = () => {
    return (
        <div className="flex justify-end items-end w-10/12 md:w-11/12 m-auto pt-7">
            <NavButton>Projects</NavButton>
            <NavButton>Contact</NavButton>
        </div>
    )
}

const NavButton: React.FC = ({ children }) => {
    const Button = styled.button`
        background: linear-gradient(
            95.56deg,
            rgba(255, 255, 255, 0.2) 1.1%,
            rgba(255, 255, 255, 0.15) 98.6%,
            rgba(255, 255, 255, 0.15) 98.6%
        );
        border: 1px solid rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(20px);

        &:focus {
            outline: none;
        }
    `
    return (
        <Button className="lg:text-lg md:px-6 lg:px-7 lg:ml-12 text-md font-heading font-semibold py-1 px-4 rounded-sm md:ml-8 ml-6">
            {children}
        </Button>
    )
}

export default Nav
