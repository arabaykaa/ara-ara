import React from "react"
import { Box, Button, Center } from "@mantine/core"
import { NavlinkComponent } from "../../hooks"
import { DarkLightTheme } from "../index"

import styles from "../components.module.scss"

interface IProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function HeaderComponent({ setLogin }: IProps) {
    return (
        <Center sx={{ display: "flex", height: "100%", alignItems: "center" }}>
            <Box sx={{ width: "30%" }}>
                <h1 className={styles.header__title}>
                    araara
                </h1>
            </Box>
            <ul className={styles.header__links}>
                <li><NavlinkComponent to={"/"}>main</NavlinkComponent></li>
                <li><NavlinkComponent to={"/articles"}>articles</NavlinkComponent></li>
                <li><NavlinkComponent to={"/chat"}>chat</NavlinkComponent></li>
                <li><NavlinkComponent to={"/todo"}>to-do</NavlinkComponent></li>
                <li><NavlinkComponent to={"/about"}>about me</NavlinkComponent></li>
            </ul>
            <Box sx={{ width: "20%", display: "flex", justifyContent: "flex-end", gap: "20px" }}>
                <DarkLightTheme />
                <Button compact color="gray" onClick={() => {
                    setLogin(false)
                    localStorage.removeItem("loginState")
                }}>
                    logout
                </Button>
            </Box>
        </Center>
    )
}

export default HeaderComponent