// import "server-only";
"use client"

import AppShellHeader from "@/Components/UI/AppShellComponents/AppShellHeader/AppShellHeader";
import AppShellNavbar from "@/Components/UI/AppShellComponents/AppShellNavBar/AppShellNavBar";
import BackgroundParticles from "@/Components/UI/BackgroundParticles";
import { AppShell, Container, MediaQuery, Text, Transition, rem } from "@mantine/core";
import { useMergedRef, useTimeout, useViewportSize } from "@mantine/hooks";


interface Props {
    children: React.ReactNode
}

const AppShellWrapper = (props: Props) => {

    return (
        <MediaQuery
            largerThan={"sm"}
            styles={{ paddingLeft: `1rem`, }}
        >

            <AppShell
                // padding={"md"}
                pt={"sm"}
                header={<AppShellHeader />}
                navbar={<AppShellNavbar />}
            // py={0}
            // pl={"lg"}
            // navbarOffsetBreakpoint="sm"
            >


                {/* <BackgroundParticles /> */}
                {props.children}
            </AppShell>

        </MediaQuery>
    )
}

export default AppShellWrapper
