import { ColorScheme } from "@mantine/core"

const colors = {
    PeachTranslucid: "hsl(38, 97%, 85%, 0.7)",
    Peach: "hsl(38, 97%, 85%)",
    // PeachLighter: "hsl(38, 95%, 90%)",

    Amaranth: "#E23E57",
    QuinacridoneMagenta: "#88304E",
    DarkByzantium: "#522546",

    DarkPurple: "#311d3f",
    DarkPurpleLighter: "hsl(275, 37%, 50%)",
    DarkPurpleTranslucid: "hsl(275, 37%, 18%, 0.7)",

    DarkSkyBlue: "#78C0E0",

    CarolinaBlueTranslucid: "hsla(202, 61%, 54%, 0.7)",
    CarolinaBlue: "hsla(202, 61%, 54%)",
    CarolinaBlueLighter: "hsla(202, 61%, 60%)",
    CarolinaBlueDarker: "hsla(202, 61%, 40%)",

    GradientLight: "linear-gradient(-45deg,rgb(59, 173, 227) 0%,rgb(87, 111, 230) 25%,rgb(152, 68, 183) 51%,rgb(255, 53, 127) 100%)",
    GradientLightTranslucid: "linear-gradient(to bottom,hsla(0, 0%, 50%, 0%) 0%,hsla(199, 75%, 56%, 20%) 15%,hsla(230, 74%, 62%,40%) 25%,hsla(284, 46%, 49%,60%) 51%,hsla(338, 100%, 60%, 80%) 100%)",
    GradientLightVertical: "linear-gradient(-100deg,rgb(59, 173, 227) 0%,rgb(87, 111, 230) 25%,rgb(152, 68, 183) 51%,rgb(255, 53, 127) 100%)",

    GradientDark: "linear-gradient(-45deg, rgb(35, 1, 91) 0%, rgb(68, 1, 91) 25% , rgb(100, 1, 91) 51%,rgb(122, 2, 54) 100%) ",
    GradientDarkTranslucid: "linear-gradient(to bottom,hsla(0, 0%, 50%, 0%) 0%, hsla(263, 98%, 18%, 20%) 15%, hsla(285, 98%, 18%, 40%) 25% , hsla(305, 98%, 20%,60%) 51%,hsla(334, 97%, 24%, 80%) 100%) ",
    GradientDarkVertical: "linear-gradient(-100deg, rgb(35, 1, 91) 0%, rgb(68, 1, 91) 25% , rgb(100, 1, 91) 51%,rgb(122, 2, 54) 100%) ",

}

export const DefaultColorScheme: ColorScheme = "light"
export const Colors = (colorScheme: ColorScheme = DefaultColorScheme) => {

    // props.colorScheme = props.colorScheme ? props.colorScheme : "light"


    const backgroundColor = colorScheme === "dark" ? colors.GradientDark : colors.GradientLight
    const textColor = colorScheme === "dark" ? colors.Peach : colors.Peach
    const iconColor = colorScheme === "dark" ? colors.Peach : colors.Peach
    const particleColor = colorScheme === "dark" ? colors.Peach : colors.Peach


    return {
        backgroundColor: backgroundColor,
        textColor: textColor,
        iconColor: iconColor,
        particlesColor: particleColor,
    }
}

