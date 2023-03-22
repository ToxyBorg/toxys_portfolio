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

    const [navBarHidden, setNavBarHidden] = useState(false);

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{
                // paddingLeft: `2rem`,
                paddingLeft: navBarHidden ? 0 : "2rem",
                // paddingLeft: 0,
            }}
        >

            <AppShell
                // padding={"md"}
                padding={0}
                // pt={"sm"}
                header={<AppShellHeader />}
                navbar={<AppShellNavbar navBarHidden={navBarHidden} setNavBarHidden={setNavBarHidden} />}
                // py={0}
                // pl={"lg"}
                navbarOffsetBreakpoint={navBarHidden ? 2000 : "sm"}
            >


                {/* <BackgroundParticles /> */}
                {props.children}
            </AppShell>

        </MediaQuery>
    )
}

export default AppShellWrapper
