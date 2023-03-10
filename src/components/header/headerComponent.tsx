import React from "react"
import { Box, Button, Center } from "@mantine/core"
import styles from "./header.module.scss"
import { DarkLightTheme } from "../index"
import { NavlinkComponent } from "../../hooks"

function HeaderComponent() {
    return (
        <Center sx={{ display: "flex", height: "100%", alignItems: "center" }}>
            <Box sx={{ width: "30%" }}>
                <h1 className={styles.title}>
                    araara
                </h1>
            </Box>
            <ul className={styles.links}>
                <li><NavlinkComponent to={"/"}>main</NavlinkComponent></li>
                <li><NavlinkComponent to={"/work"}>my work</NavlinkComponent></li>
                <li><NavlinkComponent to={"/chat"}>chat</NavlinkComponent></li>
                <li><NavlinkComponent to={"/todo"}>to-do</NavlinkComponent></li>
                <li><NavlinkComponent to={"/about"}>about me</NavlinkComponent></li>
            </ul>
            <Box sx={{ width: "20%", display: "flex", justifyContent: "flex-end", gap: "20px" }}>
                <DarkLightTheme />
                <Button compact color="gray">
                    logout
                </Button>
            </Box>
        </Center>
    )
}

export default HeaderComponent