import { Paper, Text } from "@mantine/core"
import React from "react"

interface IProps {
    title: string
    text: string
}

const ArticlesBlock = ({ title, text }: IProps) => {
    return (
        <Paper shadow="md" p="md" mb={20} withBorder>
            <Text sx={{ marginBottom: "1rem" }} color="orange" size={20}>{title}</Text>
            <Text>{text}</Text>
        </Paper>
    )
}

export default ArticlesBlock