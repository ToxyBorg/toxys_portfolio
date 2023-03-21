"use client"

import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { Center, Container, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";

interface Props { }

const MainPageContainer: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {
    const { colorScheme } = useMantineColorScheme()
    const getColors = Colors(colorScheme)
    return (
        <Container
            fluid
            w={"100%"}
            h={"100vh"}
            // top={0}
            // pos={"fixed"}
            sx={{
                border: "2px solid white"
            }}
            // m={0}
            bg={getColors.backgroundColor}
            className={styles.Animated_Background_Gradient}
        >

        </Container>
    )
}

export default MainPageContainer


/*
        <Container
            fluid
            w={"100%"}
            h={"100vh"}
            top={0}
            // pos={"fixed"}
            sx={{
                border: "2px solid white"
            }}
            m={0}
            bg={getColors.backgroundColor}
            className={styles.Animated_Background_Gradient}
        >

        </Container>

*/

