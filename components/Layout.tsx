
import Navigation from "./NavBar";
import Footer from "./Footer";
import React, { useState, useEffect, useContext } from "react";

//components
import CustomCursor from "./CustomCursor";
import { AppContext } from "../context/AppContext";

interface defaultPositionProps {
    x: number;
    y: number;
}

const Layout = ({ children }: { children: React.ReactNode }) => {

    const defaultPosition = {
        x: 0,
        y: 0
    }
    const [mousePosition, setMousePosition] = useState<defaultPositionProps>(defaultPosition)

    const { customVariant } = useContext(AppContext)


    useEffect(() => {
        const mousemove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mousemove)

        return () => {
            window.removeEventListener('mousemove', mousemove)
        }

    }, [])


    const variants = {
        default: {
            x: mousePosition.x - 15,
            y: mousePosition.y - 15
        },
        text: {
            x: mousePosition.x - 37.5,
            y: mousePosition.y - 37.5,
            height: 75,
            width: 75,
            mixBlendMode: "difference",
            backgroundColor: "white"
        },
        image: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            mixBlendMode: "difference",
        }
    }
    return (
        // layout for entire application
        <div className="w-full relative">
            <Navigation />
            <CustomCursor variants={variants} customVariant={customVariant} />
            <main>{children}</main>
            <Footer />

        </div>
    )
}


export default Layout;