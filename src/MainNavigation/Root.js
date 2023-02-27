import React from "react";
import MainNavigation from "./MainNavigation";

const Root = (props) => {
    return (<>
        <MainNavigation />

        <main>
            {props.children}
        </main>

    </>
    )
}
export default Root;