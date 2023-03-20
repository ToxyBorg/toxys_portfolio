import "server-only"
// "use client"

import AppShellWrapper from "./AppShellWrapper";
import MantineRootStyleWrapper from "./MantineRootStyleWrapper";

interface Props {
    children: React.ReactNode,
}

const ContextWrapper = (props: Props) => {
    // const itemsDataAtomSetter = useSetAtom(itemsDataAtom)
    // itemsDataAtomSetter(props.AllItemsData)

    return (


        <MantineRootStyleWrapper>
            <AppShellWrapper>
                {props.children}
            </AppShellWrapper>
        </MantineRootStyleWrapper>

    )
}

export default ContextWrapper