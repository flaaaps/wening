import React from "react"
import styled from "styled-components"

const Nav: React.FC = () => {
    return (
        <div className="flex justify-end items-end w-11/12 m-auto">
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
        border: 1px solid rgba(255, 255, 255, 0.25);

        &:focus {
            outline: none;
        }
    `
    return (
        <Button className="md:text-md lg:text-lg md:py-1 md:px-6 text-sm font-heading font-semibold py-1 px-4 rounded-sm mt-5 md:ml-8 ml-5">
            {children}
        </Button>
    )
}

export default Nav
