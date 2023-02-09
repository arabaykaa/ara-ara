import { Box, Text } from "@mantine/core"
import React from "react"

interface IProps {
    text: string;
}

const ToDoList = (props: IProps) => {
    return (
        <Box>
            <Text>
                {props.text}
            </Text>
        </Box>
    )
}

export default ToDoList