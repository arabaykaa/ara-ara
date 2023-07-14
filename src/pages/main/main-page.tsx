import { Box, Grid } from "@mantine/core"
import { CardComponent } from "../../components/elements/index"
import { articles, chat, ToDoImg, aboutMe } from "../../assets/image"
import styles from "./main.module.scss"


const cardsData: CardDataType[] = [
    {
        src: articles,
        alt: "my work",
        title: "my work",
        text: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        path: "work",
    },
    {
        src: chat,
        alt: "chat",
        title: "chat",
        text: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        path: "chat",
    },
    {
        src: ToDoImg,
        alt: "to-do",
        title: "to-do",
        text: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        path: "todo",
    },
    {
        src: aboutMe,
        alt: "about me",
        title: "about me",
        text: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        path: "about",
    },
]

function MainPage() {
    return (
        // <AppShell padding="md"
        //     header={
        //         <Header height={60} p="xs">
        //             <HeaderComponent />
        //         </Header>}>
        //     <main style={{ minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box className={styles.mainContainer}>
            <Box sx={{ maxWidth: "80%", gap: "2%", display: "flex" }}>
                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                    {cardsData.map((items, index = 0) => (
                        <Grid.Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <CardComponent src={items.src} alt={items.alt} title={items.title} text={items.text} path={items.path} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Box>
        </Box>
        // {/* <AboutMe /> */}
        // <FooterComponent />
        //     </main>
        // </AppShell>
    )
}

export default MainPage