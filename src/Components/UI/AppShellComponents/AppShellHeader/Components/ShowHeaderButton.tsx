import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { navSlide } from "@/Shared/icons";
import { ActionIcon, Container, MediaQuery, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";
import { Dispatch, SetStateAction } from "react";

interface Props {
    headerHidden: boolean,
    setHeaderHidden: Dispatch<SetStateAction<boolean>>
}

const ShowHeaderButton: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {

    const { colorScheme } = useMantineColorScheme()
    const getColors = Colors(colorScheme)

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{
                display: "none",

            }}
        >

            <ActionIcon
                sx={{
                    transform: props.headerHidden ? "translateY(0%)" : "translateY(150%)",

                    // transitionDuration: "600ms",
                    transition: "all 400ms ease-in-out",

                    zIndex: 2,
                }}
                display={"block"}

                m={"xs"}
                pos={"fixed"}
                bottom={0}
                right={0}

                variant={"outline"}
                // mx={"auto"}
                // my={"auto"}
                w={"fit-content"}
                h={"fit-content"}
                // p={0}

                onClick={() => props.setHeaderHidden(false)}
                title={"Show Navigation bar"}
                className={styles.Animated_Border_Gradient}

            >

                <Container
                    className={styles.Animated_Background_Gradient}
                    bg={getColors.backgroundColor}
                    fluid
                    h={"fit-content"}
                    w={"fit-content"}
                    py={"xs"}
                    px={"lg"}

                >
                    <navSlide.icon
                        style={{
                            transition: "all 800ms ease-in-out",
                            transform: props.headerHidden ? "rotate(-45deg)" : "rotate(135deg)",
                        }}

                        size={"2rem"}
                    />
                </Container>

            </ActionIcon>


        </MediaQuery>
    )
}

export default ShowHeaderButton