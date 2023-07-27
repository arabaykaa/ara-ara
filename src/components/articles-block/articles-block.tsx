import { Paper, Text } from "@mantine/core"
import React from "react"
import { Link } from "react-router-dom"

interface IProps {
    postid: number
    title: string
    text: string
}

const ArticlesBlock = ({ title, text, postid }: IProps) => {
    return (
        <Paper shadow="md" p="md" mb={20} withBorder>
            <Text sx={{ marginBottom: "1rem" }} color="orange" size={20}>{title}</Text>
            <Text>{text}</Text>
            <Link to={`/articles/${postid}`}>More</Link>
        </Paper >
    )
}

export default ArticlesBlock