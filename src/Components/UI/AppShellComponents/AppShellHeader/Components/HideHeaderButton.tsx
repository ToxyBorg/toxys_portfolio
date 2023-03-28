import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { navSlide } from "@/Shared/icons";
import { ActionIcon, Container, MediaQuery, useMantineColorScheme } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import type { NextComponentType, NextPageContext } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { headerHiddenAtom } from "../../../../../../Stores/headerHiddenStore";
import { useWindowScroll } from "@mantine/hooks";
import { HeaderAtTheTopAtom } from "../../../../../../Stores/headerAtTheTopStore";

interface Props { }

const HideHeaderButton: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {

    const [headerHidden, setHeaderHidden] = useAtom(headerHiddenAtom);
    // const HeaderAtTheTop = useAtomValue(HeaderAtTheTopAtom);
    // const [scroll, scrollTo] = useWindowScroll();
    // const [headerAtTopOfScreen, setHeaderAtTopOfScreen] = useState(false)

    // let localHeaderAtTheTop = 

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{
                // transition: "all 800ms ease-in-out",
                // transform: HeaderAtTheTop ? "translateX(150%)" : "translateX(0%)",
                // margin: HeaderAtTheTop ? 0 : "auto",
                // width: HeaderAtTheTop ? 0 : "fit-content",
                // display: HeaderAtTheTop ? "none" : "block",
            }}
        >

            <ActionIcon

                variant={"transparent"}
                w={"fit-content"}
                h={"fit-content"}
                p={"md"}

                m={"auto"}

                onClick={() => setHeaderHidden(!headerHidden)}
                title={"Hide Navigation bar"}

            >
                <MediaQuery
                    largerThan={"sm"}
                    styles={{
                        rotate: headerHidden ? "180deg" : "-180deg",
                    }}
                >

                    <navSlide.icon
                        style={{
                            transition: "all 800ms ease-in-out",
                            transform: headerHidden ? "rotate(-45deg)" : "rotate(135deg)",
                        }}
                    />

                </MediaQuery>


            </ActionIcon>


        </MediaQuery>
    )
}

export default HideHeaderButton