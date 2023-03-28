import { CSSObject } from "@mantine/core";
import { Sizes } from "../sizes";
import styles from "./styles.module.css"

export default styles;

/*************************************************************** */

export const defaultStyles: {
    default_gradient_border_radius: CSSObject
} = {
    default_gradient_border_radius: {

        borderRadius: Sizes.borderRadius,

        ":after": {
            borderRadius: Sizes.outsideBorderRadius,
        },

    }
}