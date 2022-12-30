import React from "react";

import { motion } from "framer-motion";
import { useContext } from "react";

import { AppContext } from "../context/AppContext";

const HeaderStyle = ({ children, className, headerClassName }: { children: React.ReactNode, className?: string, headerClassName?: string }) => {

    const { textEnter, textLeave } = useContext(AppContext)

    return (
        <motion.div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className={`w-full flex justify-center items-center relative ${className}`}
        >
            <h1 className={`capitalize font-bold mr-2 font-alclonica ${headerClassName}`}>{children}</h1>
            <span className="w-full h-[1px] bg-charcoal rounded"></span>
        </motion.div>
    )
}



export default HeaderStyle;