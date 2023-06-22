import React from "react"
import { ArticlesBlock } from "../../components"
import { Box } from "@mantine/core"
import { useGetArticlesQuery } from "../../redux/contentSlice/contentSlice"

function Articles() {
    const { data, isLoading } = useGetArticlesQuery()
    if (isLoading) {
        return (<>Loading...</>)
    }
    return (
        <Box sx={{ width: "100%", padding: "2% 10%" }}>
            {data?.map((items) => (
                <ArticlesBlock key={items.id} title={items.title} text={items.body} />
            ))}
        </Box>
    )
}

export default Articles