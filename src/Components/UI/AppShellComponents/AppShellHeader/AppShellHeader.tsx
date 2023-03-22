import { Header, MediaQuery, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";
import ThemeSwitch from "../Shared/ThemeSwitch";
import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";

interface Props { }

const AppShellHeader: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {

  const { colorScheme } = useMantineColorScheme()
  const getColors = Colors(colorScheme)

  return (
    <MediaQuery
      // query="(min-width: 250px) and (max-width: 750px)"
      smallerThan={"sm"}
      largerThan={250}
      styles={{ display: "block", height: 60 }}
    >
      <Header
        display={"none"}
        height={"auto"}
        p={"xs"}

        position={{ bottom: 0 }}

        bg={getColors.backgroundColor}

        className={styles.Animated_Background_Gradient}

        sx={{
          borderRadius: 15,
          border: "2px solid white",

        }}
        m={"xs"}



      // zIndex={150}
      >
        <ThemeSwitch />
      </Header>
    </MediaQuery>
  )
}

export default AppShellHeader
