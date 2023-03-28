import { ActionIcon, Button, CSSObject, Container, Group, Header, MediaQuery, Transition, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";
import ThemeSwitch from "../Shared/ThemeSwitch";
import { Colors } from "@/Shared/colors";
import styles, { defaultStyles } from "@/Shared/css/styles";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import { useHeadroom, useHover, useWindowScroll } from "@mantine/hooks";
import HideHeaderButton from "./Components/HideHeaderButton";
import { navSlide } from "@/Shared/icons";
import { IconContext } from "react-icons";
import ShowHeaderButton from "./Components/ShowHeaderButton";
import { headerHiddenAtom } from "../../../../../Stores/headerHiddenStore";
import { useAtom, useAtomValue } from "jotai";
import { HeaderAtTheTopAtom } from "../../../../../Stores/headerAtTheTopStore";
import { Sizes } from "@/Shared/sizes";

interface Props { }


const AppShellHeader: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {

  const headerHidden = useAtomValue(headerHiddenAtom);

  const { colorScheme } = useMantineColorScheme()
  const getColors = Colors(colorScheme)

  const pinned = useHeadroom({ fixedAt: 120 });

  const { hovered, ref: hoverRef } = useHover();


  return (



    <IconContext.Provider value={{
      color: getColors.iconColor,
      size: "2rem",
    }}
    >


      <ShowHeaderButton />


      <MediaQuery
        largerThan={"sm"}
        styles={{

          transition: "all 400ms ease-in-out",

          transform: (!headerHidden) ? "translateY(0%)" : "translateY(-150%)",
          opacity: (!headerHidden) ? ((pinned || hovered) ? 1 : 0.3) : 0,


          width: (pinned || hovered) ? "98%" : "100%",
          maxWidth: "3200px",

          border: 0,
          borderRadius: (pinned || hovered) ? Sizes.borderRadius : 0,

          top: 0,
          marginTop: (pinned || hovered) ? "1rem" : 0,


          "&:after": {
            transition: "all 400ms ease-in-out",
            opacity: (!headerHidden) ? ((pinned || hovered) ? 1 : 0) : 0,

          },
        }}

      >


        <Header
          ref={hoverRef}

          height={"fit-content"}
          position={{ bottom: 0 }}

          className={styles.Animated_Border_Gradient}

          fixed
          w={"96%"}

          sx={{

            ...defaultStyles.default_gradient_border_radius,


            transform: (!headerHidden && pinned) ? "translateY(0%)" : "translateY(150%)",
            opacity: (!headerHidden) ? 1 : 0,

            transition: "all 400ms ease-in-out",

          }}


          my={"xs"}
          mx={"auto"}
          p={0}

        >

          <Group
            noWrap

            className={styles.Animated_Background_Gradient}
            bg={getColors.backgroundColor}
            sx={{
              overflow: "hidden",
            }}

          >

            <ThemeSwitch />

            <HideHeaderButton />

          </Group>


        </Header>


      </MediaQuery>

    </IconContext.Provider>

  )
}

export default AppShellHeader
