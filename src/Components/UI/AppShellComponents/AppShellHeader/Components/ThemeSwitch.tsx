import { darkThemeIcon, lightThemeIcon } from "@/Shared/icons";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";

interface Props { }

const ThemeSwitch: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    // const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={colorScheme == "dark" ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            h={"100%"}
            w={"100%"}
            mx={"auto"}

        >
            {colorScheme == "dark" ? <lightThemeIcon.icon size="1.1rem" /> : <darkThemeIcon.icon size="1.1rem" />}
        </ActionIcon>
    );
}

export default ThemeSwitch
