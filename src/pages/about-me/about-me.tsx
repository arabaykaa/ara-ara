import React from "react"
import { Box, Paper } from "@mantine/core"
import styles from "./about-me.module.scss"

function AboutMe() {
    return (
        <Box sx={{ width: "100%", minHeight: "100%", display: "flex", justifyContent: "center" }}>
            <Paper shadow="xs" p="sm" sx={{ width: "80%", heigth: "100%", display: "flex" }}>
                <Box sx={{ width: "25%", padding: "0.4rem" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        <Box sx={{ overflow: "hidden", width: "200px", height: "200px", borderRadius: "50%" }} >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1pNzfnQgeABOdREljz2rAoIwly9tG9JOxQ&usqp=CAU"
                                alt="me" className={styles.userPhoto} />
                        </Box>
                        <Box>
                            <a href="mailto: example@gmail.com" style={{ textDecoration: "none", color: "red" }}>
                                example@gmail.com
                            </a>
                        </Box>
                        <Box>
                            link
                            link
                            link
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "75%", padding: "0.6rem" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam eos hic impedit aliquid est labore iure. Quos debitis neque ut dicta voluptatum! Exercitationem, deleniti incidunt placeat quam similique autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam eos hic impedit aliquid est labore iure. Quos debitis neque ut dicta voluptatum! Exercitationem, deleniti incidunt placeat quam similique autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam eos hic impedit aliquid est labore iure. Quos debitis neque ut dicta voluptatum! Exercitationem, deleniti incidunt placeat quam similique autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam eos hic impedit aliquid est labore iure. Quos debitis neque ut dicta voluptatum! Exercitationem, deleniti incidunt placeat quam similique autem.
                </Box>
            </Paper>
        </Box >
    )
}

export default AboutMe