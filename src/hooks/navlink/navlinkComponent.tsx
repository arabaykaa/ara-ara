import React from "react"
import { NavLink } from "react-router-dom"

interface IProps {
    to: string;
    children: string;
}

const NavlinkComponent = (props: IProps) => {
    return (
        <NavLink style={({ isActive }) => {
            return isActive ? {
                color: "#b81f27",
                textDecoration: "none"
            } : { textDecoration: "none" }
        }} to={props.to}>
            {props.children}
        </NavLink>
    )
}

export default NavlinkComponent