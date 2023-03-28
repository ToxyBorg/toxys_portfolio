import { useShallowEffect, useWindowScroll } from '@mantine/hooks';
import { atom } from 'jotai';
import { headerHiddenAtom } from './headerHiddenStore';


const HeaderAtTheTopInitAtom = atom(true)
export const HeaderAtTheTopAtom = atom(
    (get) => get(HeaderAtTheTopInitAtom),
    (_get, set) => {
        // const [scroll, scrollTo] = useWindowScroll();

        // if (scroll.y > 50) {
        //     set(HeaderAtTheTopInitAtom, false)
        // }

        useShallowEffect(() => {


            window.onscroll = () => {

                if (scrollY <= 50) { // 
                    if (_get(HeaderAtTheTopInitAtom) == false) {
                        set(headerHiddenAtom, false)
                        set(HeaderAtTheTopInitAtom, true)
                    }

                } else if (scrollY > 50) { // Scrolling down
                    if (_get(HeaderAtTheTopInitAtom) == true) {
                        set(HeaderAtTheTopInitAtom, false)
                    }
                }

            }

        }, [HeaderAtTheTopInitAtom])

        // if (window.scrollY > 50) {
        //     if (_get(HeaderAtTheTopInitAtom) == true) {
        //         set(HeaderAtTheTopInitAtom, false)
        //     }
        // }
        // else {
        //     if (_get(HeaderAtTheTopInitAtom) == false) {
        //         set(HeaderAtTheTopInitAtom, true)
        //     }
        // }
    }

)