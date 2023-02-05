import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'
import React from 'react'

function DarkLightTheme() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="transparent"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size="md"
        >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
    )
}

export default DarkLightTheme