import { Box, TextInput } from "@mantine/core"
import React, { ChangeEvent, FormEvent, useState } from "react"

import styles from "./to-do.module.scss"

const ToDoComponent = () => {
    // const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");
    // const submit = (event) => {
    //     setTask(event.todo);
    //     console.log(tasks);
    // }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTask("");
    }
    return (
        <Box className={styles.mainContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <TextInput label="What To-Do?" value={task} onChange={handleChange} />
            </form>
        </Box>
    )
}

export default ToDoComponent