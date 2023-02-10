import { Paper, Text } from "@mantine/core"
import React from "react"

interface IProps {
    text: string;
}

const ToDoList = (props: IProps) => {
    return (
        <Paper shadow="md" radius="md" p="xs" withBorder sx={{ background: "gray" }}>
            <Text>
                {props.text}
            </Text>
        </Paper>
    )
}

export default ToDoList