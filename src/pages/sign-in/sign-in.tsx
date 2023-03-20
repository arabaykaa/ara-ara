import React from "react"
import { Box, Center, Paper, TextInput, Button, Text, PasswordInput } from "@mantine/core"
import styles from "./sign-in.module.scss"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    name: string;
    password: string;
}

function SignIn() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }

    return (
        <Center className={styles.main__container}>
            <Paper className={styles.signInContainer} shadow="xl">
                <Center className={styles.signInBox}>
                    <Box className={styles.logInContainer}>
                        <Text sx={{ fontSize: "32px", fontWeight: "bold", paddingBottom: "20px" }}>Log In</Text>
                        <form onSubmit={handleSubmit(onSubmitForm)} className={styles.formStyle}>
                            <TextInput placeholder='name' variant='default' size='md' sx={{ marginBottom: "20px", width: "80%" }}
                                {...register("name", { required: true, maxLength: 20 })} />
                            <PasswordInput placeholder='password' variant='default' size='md' sx={{ marginBottom: "20px", width: "80%" }}
                                {...register("password", { required: true, maxLength: 20 })} />
                            <Button sx={{ width: "60%", backgroundColor: "#181D31" }} type="submit">submit</Button>
                        </form>
                    </Box>
                </Center>
                <Box className={styles.imageBox}>
                    <Box className={styles.imageStyle} />
                </Box>
            </Paper>
        </Center>
    )
}

export default SignIn