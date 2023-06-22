import { Grid, TextInput } from "@mantine/core"
import React, { ChangeEvent, FormEvent, useState } from "react"
import ToDoList from "./to-do-list";

import styles from "../components.module.scss"

const ToDoComponent = () => {
    const [tasks, setTasks] = useState<ToDoType[]>([]);
    const [task, setTask] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (task.trim().length > 0) {
            setTasks(prev => [...prev, { id: Math.floor(Math.random() * 1000), text: task.trim() }]);
            setTask("");
        }
    }
    return (
        <Grid sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Grid.Col xs={12} md={6} lg={5} sx={{ width: "100%" }}>
                <form onSubmit={handleSubmit} className={styles.todo__form_ontainer}>
                    <TextInput label="What To-Do?" value={task} onChange={handleChange} />
                </form>
            </Grid.Col>
            {tasks.map((items) => (
                <Grid.Col key={items.id} xs={12} md={6} lg={5} sx={{ width: "100%" }}>
                    <ToDoList text={items.text} />
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default ToDoComponent