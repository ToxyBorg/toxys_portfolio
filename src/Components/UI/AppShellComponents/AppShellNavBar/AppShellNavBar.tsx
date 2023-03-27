import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { ActionIcon, Button, Container, Divider, Grid, Header, MediaQuery, Navbar, SimpleGrid, Stack, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import type { NextComponentType, NextPageContext } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import ThemeSwitch from "../Shared/ThemeSwitch";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { navSlide } from "@/Shared/icons";
import { IconContext } from "react-icons";

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
  // const [parent, enableAnimations] = useAutoAnimate()

  return (

    <IconContext.Provider value={{
      color: getColors.iconColor,
      size: "2rem",
    }}
    >

      <MediaQuery
        largerThan={"sm"}
        styles={{
          display: "block",
          // transition: "all 800ms ease-in-out",
          transitionDuration: "900ms",

          transform: props.navBarHidden ? "translateX(0%)" : "translateX(-100%)",
          // transitionDuration: "600ms",
          zIndex: 1,

        }}
      >
        <ActionIcon
          sx={{
            display: "none",
            position: "fixed",
            left: 0,

            borderRadius: "0px calc(0.25rem * 2) calc(0.25rem * 2) 0px",
            border: `0.25rem solid ${getColors.borderColor} `,
            borderLeft: "0px",

            background: "rgba(255, 255, 255, 0.2)",

          }}
          // bg={getColors.navBarBackgroundColor}
          // className={styles.Animated_Border_Gradient}
          variant={"outline"}
          // mx={"auto"}
          // my={"auto"}
          w={"fit-content"}
          h={"5rem"}
          p={"md"}

          onClick={() => props.setNavBarHidden(!props.navBarHidden)}
          title={props.navBarHidden ? "Show Navigation bar" : "Hide Navigation bar"}
        >
          <navSlide.icon
            style={{
              transition: "all 800ms ease-in-out",
              transform: props.navBarHidden ? "rotate(45deg)" : "rotate(-135deg)"
            }}
          // size={"1.5rem"}
          />
        </ActionIcon>

      </MediaQuery>


      <MediaQuery
        largerThan={"sm"}
        styles={{
          transition: "all 800ms ease-in-out",

          transform: !props.navBarHidden ? "translateX(0%)" : "translateX(-100%)",
          // transitionDuration: "600ms",
        }}
      >

        <Navbar

          hidden
          p={"xs"}
          hiddenBreakpoint="sm"
          width={{ base: "6rem" }}
          height={"auto"}

          bg={getColors.navBarBackgroundColor}
          // className={` ${styles.Animated_Background_Gradient} ${styles.Animated_Border_Gradient}`}
          className={` ${styles.Animated_Background_Gradient}}`}

          top={0}

          my={"md"}
          sx={{
            borderRadius: "0px calc(0.25rem * 2) calc(0.25rem * 2) 0px",
            border: `0.25rem solid ${getColors.borderColor} `,

            borderLeft: "0px",
            // transform: "translateX(-100%)",

            // transitionDuration: "600ms",
          }}
        >

          <Navbar.Section>
            <ActionIcon
              variant="transparent"

              h={"fit-content"}
              w={"fit-content"}
              p={"md"}

              mx={"auto"}
              my={"auto"}
              radius={"md"}
              onClick={() => props.setNavBarHidden(!props.navBarHidden)}
              title={props.navBarHidden ? "Show Navigation bar" : "Hide Navigation bar"}
            >
              <navSlide.icon
                style={{
                  transition: "all 800ms ease-in-out",
                  transform: props.navBarHidden ? "rotate(45deg)" : "rotate(-135deg)"
                }}
              />
            </ActionIcon>
          </Navbar.Section>

          <Divider my="sm" />

          <Navbar.Section grow>
            <ThemeSwitch />
          </Navbar.Section>


        </Navbar>
      </MediaQuery>

    </IconContext.Provider>

  )
}

export default AppShellNavbar

/**

      <MediaQuery

        largerThan={"sm"}
        styles={{
          display: "block",
          transform: props.navBarHidden ? "translateX(0%)" : "translateX(-150%)",
          transitionDuration: "600ms",
          // display: props.navBarHidden ? "block" : "none",

        }}
      >

        <Button

          sx={{
            transform: "translateX(-150%)",
            transitionDuration: "600ms",
            zIndex: 250,
          }}
          display={"none"}

          m={"xs"}
          pos={"fixed"}
          onClick={() => props.setNavBarHidden(false)}
        >
          Open Nav
        </Button>


      </MediaQuery>

      
 */

