import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

import { MouseAnimationProps } from "../index.types";

interface LinkStyleProps extends MouseAnimationProps {
    children: React.ReactNode;
    href: string;
}

const LinkStyle = ({ children, href, textEnter, textLeave }: LinkStyleProps) => {
    return (
        <motion.div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className={`relative inline-block text-custom-grey capitalize mx-6 font-alclonica before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:h-[2px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full`}>
            <Link href={href} >{children} </Link>
        </motion.div>
    )
}


export default LinkStyle;