
import Navigation from "./navigation";
import Footer from "./footer";
import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        // layout for entire application
        <div className="w-full relative">
            <Navigation />
            <main>{children}</main>
            <Footer />

        </div>
    )
}


export default Layout;