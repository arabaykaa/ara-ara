import { Box, TextInput } from "@mantine/core"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import styles from "./to-do.module.scss"

interface Input {
    todo: string
}

const ToDoComponent = () => {
    const { register, handleSubmit } = useForm<Input>();
    const submit: SubmitHandler<Input> = (data) => {
        console.log(data);
    }
    return (
        <Box className={styles.mainContainer}>
            <form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
                <TextInput label="What To-Do?" {...register("todo", { required: true, maxLength: 70 })} />
            </form>
        </Box>
    )
}

export default ToDoComponent