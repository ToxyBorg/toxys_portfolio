import { ActionIcon, Button, Container, Group, Header, MediaQuery, Transition, useMantineColorScheme } from "@mantine/core";
import type { NextComponentType, NextPageContext } from "next";
import ThemeSwitch from "../Shared/ThemeSwitch";
import { Colors } from "@/Shared/colors";
import styles from "@/Shared/css/styles";
import { SetStateAction, useState } from "react";
import { useHeadroom, useHover, useWindowScroll } from "@mantine/hooks";
import HideHeaderButton from "./Components/HideHeaderButton";
import { navSlide } from "@/Shared/icons";
import { IconContext } from "react-icons";
import ShowHeaderButton from "./Components/ShowHeaderButton";

interface Props { }

const AppShellHeader: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {

  const [headerHidden, setHeaderHidden] = useState(false);

  const { colorScheme } = useMantineColorScheme()
  const getColors = Colors(colorScheme)

  const pinned = useHeadroom({ fixedAt: 120 });

  // const [scroll, scrollTo] = useWindowScroll();
  const { hovered, ref: hoverRef } = useHover();

  // console.log("HOVERED: ", hovered, " | PINNED: ", pinned)

  return (



    <IconContext.Provider value={{
      color: getColors.iconColor,
      size: "2rem",
    }}
    >


      <ShowHeaderButton headerHidden={headerHidden} setHeaderHidden={setHeaderHidden} />


      <MediaQuery
        largerThan={"sm"}
        styles={{
          // transform: (pinned) ? "translateY(0%)" : "translateY(-150%)",
          transform: "translateY(0%)",
          // opacity: (scroll.y > 50 && !hovered) ? 0.3 : 1,
          opacity: (pinned || hovered) ? 1 : 0.3,

          transition: "all 400ms ease-in-out",

          width: "100%",
          maxWidth: "3200px",

          borderRadius: 0,
          border: "0px",
          // borderTopLeftRadius: 0,
          // borderTopRightRadius: 0,

          margin: 0,
          marginInline: "auto",

          top: 0,


          ":after": {
            border: "0px",
            // borderTopRightRadius: "0px",
            // borderBottomRightRadius: "0px",
            transition: "all 400ms ease-in-out",

            // opacity: (scroll.y > 50 && !hovered) ? 0 : 1,
            opacity: (pinned || hovered) ? 1 : 0,

            borderRadius: 0,
          },
        }}
      >


        <Header
          ref={hoverRef}

          fixed
          height={"fit-content"}
          position={{ bottom: 0 }}

          // className={styles.Animated_Background_Gradient}
          className={styles.Animated_Border_Gradient}

          w={"96%"}
          sx={{
            // borderRadius: 15,
            // border: `2px solid ${getColors.borderColor}`,
            border: "0px",

            transform: (!headerHidden && pinned) ? "translateY(0%)" : "translateY(150%)",
            opacity: (!headerHidden && pinned) ? 1 : 0,

            // transitionDuration: "600ms",
            transition: "all 400ms ease-in-out",

          }}
          mb={"xs"}
          mx={"auto"}
          p={0}

        >
          <Group
            noWrap

            className={styles.Animated_Background_Gradient}
            bg={getColors.backgroundColor}
          // p={"0.2rem"}

          >

            <ThemeSwitch />

            <HideHeaderButton headerHidden={headerHidden} setHeaderHidden={setHeaderHidden} />

            {/* <MediaQuery
              // smallerThan={"sm"}
              largerThan={"sm"}
              styles={{
                display: "none",
              }}
            >

              <Button
                mx={"auto"}
                w={"100%"}
                h={"100%"}
                onClick={() => setHeaderHidden(true)}
              >
                X
              </Button>

            </MediaQuery> */}

          </Group>


        </Header>


      </MediaQuery>

    </IconContext.Provider>

  )
}

export default AppShellHeader
