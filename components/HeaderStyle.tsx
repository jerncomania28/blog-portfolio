import React from "react";


const HeaderStyle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`w-full flex justify-center items-center relative ${className}`}>
            <h1 style={{ "fontFamily": "logo" }} className="capitalize text-[30px] font-bold mr-2">{children}</h1>
            <span className="w-full h-[1px] bg-charcoal rounded"></span>
        </div>
    )
}



export default HeaderStyle;