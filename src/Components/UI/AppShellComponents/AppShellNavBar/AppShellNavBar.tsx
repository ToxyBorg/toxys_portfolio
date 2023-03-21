import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { Grid, Header, MediaQuery, Navbar, SimpleGrid, Stack, Text, Transition, useMantineColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

interface Props { }

const AppShellNavbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  // const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme()
  const getColors = Colors(colorScheme)
  return (

    // <MediaQuery
    //   query="(min-width: 250px) and (max-width: 750px)"
    //   styles={{ height: 60, border: "2px solid black", position: "absolute", bottom: 0, }}
    // >
    <Navbar
      hidden
      p="md"
      hiddenBreakpoint="sm"
      width={{ sm: 80, xl: 90 }}
      height={"auto"}

      bg={getColors.backgroundColor}
      className={styles.Animated_Background_Gradient}

      top={0}

      m={"md"}
      sx={{
        borderRadius: 15,
        border: "2px solid white"
      }}

    >


    </Navbar>
    // </MediaQuery>


  )
}

export default AppShellNavbar
