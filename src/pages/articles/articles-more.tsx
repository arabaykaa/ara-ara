import { Box, Text } from "@mantine/core"
import { useParams } from "react-router-dom"
import { useGetArticlesMoreQuery } from "../../redux/contentSlice/contentMoreSlice"

function ArticlesMore() {
    const { id } = useParams()
    const { data, isLoading } = useGetArticlesMoreQuery(`${id}`)
    if (isLoading) {
        return (<>Loading...</>)
    }
    return (
        <Box sx={{ width: "100%", padding: "2% 10%" }}>
            <Text fz={32} fw={500}>{data?.title}</Text>
            <br />
            <Text fz={20}>{data?.body}</Text>
        </Box>
    )
}

export default ArticlesMore