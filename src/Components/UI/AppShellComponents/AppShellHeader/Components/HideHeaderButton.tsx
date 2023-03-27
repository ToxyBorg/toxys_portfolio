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

const HideHeaderButton: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {



    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{

                display: "none",
            }}
        >

            <ActionIcon
                sx={{
                    // transform: props.headerHidden ? "translateY(0%)" : "translateY(150%)",
                    // transitionDuration: "600ms",
                    // transition: "all 400ms ease-in-out",
                    // transitionDuration: "600ms",

                    // zIndex: props.headerHidden ? 1 : 0,
                }}
                display={"block"}

                // m={"xs"}
                // pos={props.headerHidden ? "fixed" : "unset"}

                // bottom={props.headerHidden ? 0 : undefined}
                // right={props.headerHidden ? 0 : undefined}

                variant={"transparent"}
                // mx={"auto"}
                // my={"auto"}
                w={"fit-content"}
                h={"fit-content"}
                p={"md"}

                mx={"auto"}
                my={"auto"}

                onClick={() => props.setHeaderHidden(true)}
                title={"Hide Navigation bar"}

            >

                <navSlide.icon
                    style={{
                        transition: "all 800ms ease-in-out",
                        transform: props.headerHidden ? "rotate(-45deg)" : "rotate(135deg)",
                    }}

                />

            </ActionIcon>


        </MediaQuery>
    )
}

export default HideHeaderButton