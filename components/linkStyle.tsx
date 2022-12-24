import Link from "next/link";
import React from "react";


interface LinkStyleProps {
    children: React.ReactNode;
    href: string;
}

const LinkStyle = ({ children, href }: LinkStyleProps) => {
    return (
        <div
            style={{ "fontFamily": "logo" }}
            className={`relative inline-block text-custom-grey capitalize mx-6 before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full`}>
            <Link href={href} >{children} </Link>
        </div>
    )
}


export default LinkStyle;