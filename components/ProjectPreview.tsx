import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

//types 
import { DataProps } from "../index.types";

// assets 

import Jeremiah from "../public/jeremiah.jpeg"
import React from "react";


const Button = ({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`border-[1px] border-white border-solid rounded text-center ${className}`}>
            <Link href={href}>
                {children}
            </Link>
        </motion.div>
    )
}


const ProjectPreview = ({ data, textEnter, textLeave }: { data: DataProps, textEnter: () => void, textLeave: () => void }) => {

    return (
        <motion.div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="group relative h-[200px] transition-all duration-500 ease-in-out hover:after:content-[''] hover:after:w-full hover:after:h-full hover:after:bg-black hover:after:opacity-80 hover:after:absolute hover:after:top-0 hover:after:left-0" style={{ "fontFamily": "logo" }}>
            <Image src={data.imagePath} alt="horse" fill />

            <div className="font-alclonica absolute top-0 left-0 w-full h-full text-[12px] hidden z-10 text-white group-hover:flex justify-center items-center flex-col ">
                <p className="text-[24px] text-center ">{data.name}</p>
                <Button href={data.href} className="px-4 py-2 my-6 transition duration-500 ease-in-out hover:border-none hover:bg-custom-grey hover:text-black">
                    Learn More
                </Button>
            </div>

        </motion.div>
    )

}


export default ProjectPreview;