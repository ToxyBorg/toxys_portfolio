// import "server-only";
"use client"

import AppShellHeader from "@/Components/UI/AppShellComponents/AppShellHeader/AppShellHeader";
import AppShellNavbar from "@/Components/UI/AppShellComponents/AppShellNavBar/AppShellNavBar";
import BackgroundParticles from "@/Components/UI/BackgroundParticles/BackgroundParticles";
import { AppShell, Container, MediaQuery, Text, Transition, rem } from "@mantine/core";
import { useMergedRef, useTimeout, useViewportSize } from "@mantine/hooks";
import { useState } from "react";


interface Props {
    children: React.ReactNode
}

const AppShellWrapper = (props: Props) => {

    // const [navBarHidden, setNavBarHidden] = useState(false);

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{
                transition: "all 400ms ease-in-out",
                paddingTop: "7rem",
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
