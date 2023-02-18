import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Root = () => {
    return (<>
        <MainNavigation />
        <main>
            <Outlet />
        </main>

        <Footer />

    </>
    )
}
export default Root;