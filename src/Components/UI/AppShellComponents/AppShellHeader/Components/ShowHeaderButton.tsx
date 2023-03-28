import { Colors } from "@/Shared/colors";
import styles, { defaultStyles } from "@/Shared/css/styles";
import { navSlide } from "@/Shared/icons";
import { ActionIcon, Container, MediaQuery, useMantineColorScheme } from "@mantine/core";
import { useAtom } from "jotai";
import type { NextComponentType, NextPageContext } from "next";
import { Dispatch, SetStateAction } from "react";
import { headerHiddenAtom } from "../../../../../../Stores/headerHiddenStore";

interface Props { }

const ShowHeaderButton: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {

    const { colorScheme } = useMantineColorScheme()
    const getColors = Colors(colorScheme)
    const [headerHidden, setHeaderHidden] = useAtom(headerHiddenAtom);

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{

                transition: "all 400ms ease-in-out",
                top: 0,
                transform: headerHidden ? "translateY(0%)" : "translateY(-150%)",
                // transform: headerHidden ? "translateY(-85vh)" : "translateY(-100vh)",

            }}
        >

            <ActionIcon
                sx={{

                    ...defaultStyles.default_gradient_border_radius,

                    transition: "all 400ms ease-in-out",
                    transform: headerHidden ? "translateY(0%)" : "translateY(150%)",
                    opacity: headerHidden ? 1 : 0,

                    zIndex: 2,
                }}
                // display={"block"}

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

                onClick={() => setHeaderHidden(!headerHidden)}
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
                    <MediaQuery
                        largerThan={"sm"}
                        styles={{
                            rotate: headerHidden ? "180deg" : "-180deg",
                        }}
                    >
                        <navSlide.icon

                            style={{
                                // background: getColors.backgroundColor,
                                transition: "all 800ms ease-in-out",
                                transform: headerHidden ? "rotate(-45deg)" : "rotate(135deg)",
                            }}
                            // rotate={"200px"}

                            size={"2rem"}
                        />


                    </MediaQuery>
                </Container>

            </ActionIcon>


        </MediaQuery>
    )
}

export default ShowHeaderButton