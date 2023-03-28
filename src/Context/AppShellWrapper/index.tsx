// import "server-only";
"use client"

import AppShellHeader from "@/Components/UI/AppShellComponents/AppShellHeader/AppShellHeader";
import BackgroundParticles from "@/Components/UI/BackgroundParticles/BackgroundParticles";
import { AppShell, Container, MediaQuery, Text, Transition, rem } from "@mantine/core";
import { useMergedRef, useTimeout, useViewportSize } from "@mantine/hooks";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { headerHiddenAtom } from "../../../Stores/headerHiddenStore";
import { HeaderAtTheTopAtom } from "../../../Stores/headerAtTheTopStore";


interface Props {
    children: React.ReactNode
}

const AppShellWrapper = (props: Props) => {

    // const [navBarHidden, setNavBarHidden] = useState(false);
    const headerHidden = useAtomValue(headerHiddenAtom);
    const HeaderAtTheTop = useAtomValue(HeaderAtTheTopAtom);


    let paddingTopShrink = false

    if (HeaderAtTheTop && headerHidden) { paddingTopShrink = true }
    else if (!HeaderAtTheTop && headerHidden) { paddingTopShrink = true }
    else { paddingTopShrink = false }

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{
                transition: "all 400ms ease-in-out",
                paddingTop: paddingTopShrink ? "1rem" : "7rem",
                // paddingTop: "7rem",
            }}
        >

            <AppShell

                sx={{
                    transition: "all 400ms ease-in-out",
                }}

                pt={"md"}
                pb={"xl"}
                header={<AppShellHeader />}
            // navbar={<AppShellNavbar navBarHidden={navBarHidden} setNavBarHidden={setNavBarHidden} />}

            // navbarOffsetBreakpoint={navBarHidden ? 3000 : "sm"}
            >

                {props.children}
            </AppShell>

        </MediaQuery>
    )
}

export default AppShellWrapper
