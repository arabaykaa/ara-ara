import { Grid, TextInput } from "@mantine/core"
import React, { ChangeEvent, FormEvent, useState } from "react"
import ToDoList from "./to-do-list";

import styles from "./to-do.module.scss"

interface IToDo {
    text: string;
    id: number;
}

const ToDoComponent = () => {
    const [tasks, setTasks] = useState<string[]>([]);
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
        <Grid sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Grid.Col xs={12} md={6} lg={5} sx={{ width: "100%" }}>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <TextInput label="What To-Do?" value={task} onChange={handleChange} />
                </form>
            </Grid.Col>
            {tasks.map((items) => (
                <Grid.Col key={items} xs={12} md={6} lg={5} sx={{ width: "100%" }}>
                    <ToDoList text="Walk with dog" />
                </Grid.Col>
            ))}
            <Grid.Col xs={12} md={6} lg={5} sx={{ width: "100%" }}>
                <ToDoList text="Walk with dog" />
            </Grid.Col>
        </Grid>
    )
}

export default ToDoComponent