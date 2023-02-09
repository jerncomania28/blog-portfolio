import Link from "next/link";

import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

//components
import LinkStyle from "./LinkStyle";

interface MobileLinkStyleProps {
    children: React.ReactNode;
    index: number;
    handleSetIsOpen: () => void;
}

const MobileLinkStyle: React.FC<MobileLinkStyleProps> = ({ children, index, handleSetIsOpen }) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: (index * 0.2) }}
            exit={{ y: -50, opacity: 0 }}
            onClick={handleSetIsOpen}
            className={`relative text-[30px] inline-block text-custom-grey capitalize font-alclonica my-4 before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full`}>
            <Link href={`/${children === "home" ? "" : children}`}>{children}</Link>
        </motion.div>
    )

}


const Navigation = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { textLeave, textEnter } = useContext(AppContext);

    const NAV_ROUTES: string[] = ["home", "portfolio", "contact", "blog"]

    // controlling display of nav on Mobile and Desktop
    const handleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="w-full relative py-6 mb-3 font-alclonica">
            <div className="w-[80%] mx-auto flex justify-between items-center before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:h-[0.5px] before:bg-[#464646] before:w-full md:before:w-[80%] before:transform before:-translate-x-[50%]">

                <motion.div onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <Link
                        href={"/"}
                        className="text-[30px] text-custom-grey"
                    >JO</Link>
                </motion.div>

                <div className="items-center hidden md:flex">
                    {
                        NAV_ROUTES.map((route: string, _idx: number) => (
                            <LinkStyle
                                href={`/${route === "home" ? "" : route}`}
                                textEnter={textEnter}
                                textLeave={textLeave}
                                key={_idx}>
                                {route}
                            </LinkStyle>
                        ))
                    }
                </div>


                <div className="w-6 h-6 relative text-center transition-all duration-500 ease-in-out md:hidden z-20" onClick={handleSetIsOpen}>
                    {/* menu Btn */}
                    <span className={`w-full h-[3px] transparent rounded absolute top-[50%] left-0 transition-all duration-500 ease-in-out before:content-[''] before:h-[3px] before:bg-custom-grey before:rounded before:absolute before:-top-[5px] before:w-full before:left-0 before:transition-all before:duration-500 before:ease-in-out after:content-[''] after:h-[3px] after:bg-custom-grey after:rounded after:absolute after:top-[5px] after:w-[60%] after:left-0 after:transition-all after:duration-500 after:ease-in-out ${isOpen && "before:transform before:translate-y-[5px] before:rotate-45 after:-translate-y-[5px] after:-rotate-45 after:w-full"}`}>
                    </span>
                </div>

            </div>

            {/* animate navigation menu on mobile on entr and exit */}

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            exit={{ y: -200, opacity: 0 }}
                            style={{ "fontFamily": "logo" }}
                            className={`w-full h-[100vh] fixed top-0 left-0 bg-black z-10 flex items-center justify-center flex-col md:hidden `}
                        >
                            {
                                NAV_ROUTES.map((route, _idx) => (
                                    <MobileLinkStyle key={_idx} index={_idx} handleSetIsOpen={handleSetIsOpen}>
                                        {route}
                                    </MobileLinkStyle>
                                ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </nav>
    )
}

export default Navigation;