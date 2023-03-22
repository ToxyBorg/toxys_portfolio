import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { Button, Divider, Grid, Header, MediaQuery, Navbar, SimpleGrid, Stack, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import type { NextComponentType, NextPageContext } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import ThemeSwitch from "../Shared/ThemeSwitch";

interface Props {
  navBarHidden: boolean,
  setNavBarHidden: Dispatch<SetStateAction<boolean>>

}

const AppShellNavbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  // const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme()
  const getColors = Colors(colorScheme)

  // const [navBarHidden, setNavBarHidden] = useState(false);

  return (

    // <MediaQuery
    //   query="(min-width: 250px) and (max-width: 750px)"
    //   styles={{ height: 60, border: "2px solid black", position: "absolute", bottom: 0, }}
    // >
    <>

      <MediaQuery
        largerThan={"sm"}
        styles={{
          display: props.navBarHidden ? "block" : "none",

        }}
      >

        <Transition mounted={props.navBarHidden} transition="slide-down" duration={400} timingFunction="ease">
          {(styles) =>

            <Button
              style={styles}
              // display={"none"}
              pos={"fixed"}
              onClick={() => props.setNavBarHidden(false)}
            >
              Open Nav
            </Button>
          }
        </Transition>


      </MediaQuery>

      <MediaQuery
        largerThan={"sm"}
        styles={{
          display: !props.navBarHidden ? "block" : "none",
          // margin: !navBarHidden ? "",
          // width: !props.navBarHidden ? "auto" : 0,

        }}
      >

        <Transition mounted={!props.navBarHidden} transition="slide-right" duration={400} timingFunction="ease">
          {(navStyles) =>



            <Navbar
              style={navStyles}
              hidden
              p={"xs"}
              hiddenBreakpoint="sm"
              width={{ sm: 80, xl: 90 }}
              height={"auto"}

              bg={getColors.backgroundColor}
              className={styles.Animated_Background_Gradient}

              top={0}

              // m={!navBarHidden ? "md" : 0}
              m={"md"}
              sx={{
                borderRadius: 15,
                border: "2px solid white"
              }}

            >

              <Navbar.Section>
                <Button
                  mx={"auto"}
                  w={"100%"}
                  h={"100%"}
                  onClick={() => props.setNavBarHidden(true)}
                >
                  X
                </Button>

              </Navbar.Section>

              <Divider my="sm" />

              <Navbar.Section grow>
                <ThemeSwitch />
              </Navbar.Section>


            </Navbar>

          }
        </Transition>
      </MediaQuery>


    </>



  )
}

export default AppShellNavbar
