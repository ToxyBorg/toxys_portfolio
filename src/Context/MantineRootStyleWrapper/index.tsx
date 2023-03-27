"use client";
export const dynamic = "force-dynamic";

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useIntersection, useMouse, useScrollIntoView } from '@mantine/hooks';
import { useRouter, useServerInsertedHTML } from 'next/navigation';
import { useRef, useState } from 'react';

import { Colors, DefaultColorScheme } from '@/Shared/colors';
import styles from '@/Shared/css/styles';




export default function MantineRootStyleWrapper({ children }: { children: React.ReactNode }) {
    const cache = useEmotionCache();
    cache.compat = true;

    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(' '),
            }}
        />
    ));


    const [colorScheme, setColorScheme] = useState<ColorScheme>(DefaultColorScheme);


    const toggleColorScheme = () => {

        const currentColorScheme = colorScheme === "dark" ? "light" : "dark"

        setColorScheme(currentColorScheme);

        const getColors = Colors(currentColorScheme)


        // document.body.className = styles.Animated_Background_Gradient;
        // document.body.className = cx(styles.Animated_Background_Gradient, styles.HiddenScrollBar)

        document.body.style.width = "100%"
        document.body.style.height = "100%"



        document.body.style.backgroundImage = getColors.bodyBackground

        document.body.style.backgroundSize = "300% 300%";
        document.body.style.animation = `${styles.AnimateBG} 7s ease infinite`;

        document.body.style.color = getColors.textColor
    };

    return (
        <CacheProvider value={cache}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider withGlobalStyles withNormalizeCSS withCSSVariables
                    theme={{
                        colorScheme: colorScheme,
                        // breakpoints: {

                        //     xs: 376,
                        //     sm: 426,
                        //     md: 787,
                        //     lg: 900,
                        //     xl: 1440,
                        // },
                    }}>

                    {children}
                </MantineProvider>
            </ColorSchemeProvider>
        </CacheProvider>
    );
}
