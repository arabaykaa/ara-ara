import React from "react"
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { NavLink } from "react-router-dom";

function CardComponent(props: CardDataType) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={props.src}
                    height={160}
                    alt={props.alt}
                />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>
            <Text size="sm" color="dimmed">
                {props.text}
            </Text>
            <NavLink to={props.path}>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    GO
                </Button>
            </NavLink>
        </Card >
    )
}

export default CardComponent