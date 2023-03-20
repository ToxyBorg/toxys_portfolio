// import "server-only";
"use client"

import BackgroundParticles from "@/Components/BackgroundParticles";
import { AppShell, Container, Transition } from "@mantine/core";
import { useMergedRef, useTimeout, useViewportSize } from "@mantine/hooks";




interface Props {
    children: React.ReactNode
}

const AppShellWrapper = (props: Props) => {



    return (

        <AppShell

        // padding={0}

        // zIndex={1}
        // pos={"relative"}

        // ref={xMousePos.xMousePosRef}
        >


            <BackgroundParticles />
            {props.children}
        </AppShell>
    )
}

export default AppShellWrapper