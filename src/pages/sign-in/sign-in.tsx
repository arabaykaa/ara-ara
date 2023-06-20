import { Box, Center, Paper, TextInput, Button, Text, PasswordInput } from "@mantine/core"
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "./sign-in.module.scss"
import React from "react"

interface IFormInput {
    name: string;
    password: string;
}
interface IProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function SignIn({ setLogin }: IProps) {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
        if (data.name === "admin" && data.password === "123") {
            setLogin(true)
        }
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