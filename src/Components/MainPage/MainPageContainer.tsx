"use client"

import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { Container, Stack, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";
import MainPageHeroSection from "./Components/Section_One/MainPageHeroSection";

interface Props { }

const MainPageContainer: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {



    return (

        <Stack
            spacing={"5rem"}
            maw={3000}
            mih={"100vh"}
            sx={{
                // border: "1px solid white"
            }}
            // mb={"20rem"}
            mx={"auto"}
        >
            <MainPageHeroSection />
            <MainPageHeroSection />
            <MainPageHeroSection />
            <MainPageHeroSection />
        </Stack>



    )
}

export default MainPageContainer


