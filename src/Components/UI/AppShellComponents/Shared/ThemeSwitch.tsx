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
            variant="transparent"
            // color={colorScheme == "dark" ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            h={"fit-content"}
            w={"fit-content"}
            p={"md"}

            mx={"auto"}
            my={"auto"}
        // radius={"md"}

        >
            {colorScheme == "dark" ? <lightThemeIcon.icon /> : <darkThemeIcon.icon />}
        </ActionIcon>
    );
}

export default ThemeSwitch
