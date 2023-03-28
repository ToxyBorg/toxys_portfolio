import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { Center, Container, Divider, MediaQuery, Space, Text, Title, Transition, useMantineColorScheme } from "@mantine/core";
import { useDisclosure, useShallowEffect, useTimeout } from "@mantine/hooks";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

interface Props { }

const MainPageHeroSection: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {

    const { colorScheme } = useMantineColorScheme()
    const getColors = Colors(colorScheme)
    const [opened, handlers] = useDisclosure(false);
    // // const { start, clear } = useTimeout(() => handlers.open(), 2000);

    useShallowEffect(() => {

        handlers.open()

        return () => handlers.close()
    }, []);



    return (

        <Transition mounted={opened} transition="slide-left" duration={600} timingFunction="ease">
            {(testStyles) =>



                // <MediaQuery
                //     largerThan={"sm"}
                //     smallerThan={3000}
                //     styles={{



                //         borderRight: "0px",
                //         borderTopRightRadius: "0px",
                //         borderBottomRightRadius: "0px",

                //         ":after": {
                //             borderRight: "0px",
                //             borderTopRightRadius: "0px",
                //             borderBottomRightRadius: "0px",
                //         },


                //     }}

                // >

                <Container
                    style={testStyles}
                    fluid
                    p={0}
                    className={styles.Animated_Border_Gradient}
                    pos={"relative"}
                >


                    <Container

                        fluid
                        h={"100vh"}
                        w={"100vw"}
                        bg={getColors.backgroundColor}
                        className={styles.Animated_Background_Gradient}
                    >

                        <Title order={1}>
                            Test title
                        </Title>



                    </Container>

                </Container>


                // </MediaQuery>

            }
        </Transition>

    )
}

export default MainPageHeroSection
