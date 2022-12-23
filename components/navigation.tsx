import Link from "next/link";

import { useState } from "react";

//components
import LinkStyle from "./linkStyle";


const Navigation = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    const NAV_ROUTES: string[] = ["about", "portfolio", "contact", "blog"]

    // controlling display of nav on Mobile and Desktop
    const handleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="w-full relative py-6 mb-3 ">
            <div className="w-[80%] mx-auto flex justify-between items-center before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:h-[0.5px] before:bg-[#464646] before:w-full md:before:w-[80%] before:transform before:-translate-x-[50%]">
                <Link
                    href={"/"}
                    style={{ fontFamily: "logo" }}
                    className="text-[30px] text-custom-grey"
                >JO</Link>

                <div className="items-center hidden md:flex">
                    {
                        NAV_ROUTES.map((route: string, _idx: number) => (
                            <LinkStyle href={`/${route}`} key={_idx}>
                                {route}
                            </LinkStyle>
                        ))
                    }
                </div>


                <div className="w-6 h-6 relative text-center transition-all duration-500 ease-in-out md:hidden" onClick={handleSetIsOpen}>

                    {/* menu Btn */}
                    <span className={`w-full h-[3px] transparent rounded absolute top-[50%] left-0 transition-all duration-500 ease-in-out before:content-[''] before:h-[3px] before:bg-charcoal before:rounded before:absolute before:-top-[5px] before:w-full before:left-0 before:transition-all before:duration-500 before:ease-in-out after:content-[''] after:h-[3px] after:bg-charcoal after:rounded after:absolute after:top-[5px] after:w-[60%] after:left-0 after:transition-all after:duration-500 after:ease-in-out ${isOpen && "before:transform before:translate-y-[5px] before:rotate-45 after:-translate-y-[5px] after:-rotate-45 after:w-full"}`}>
                    </span>


                </div>

            </div>

        </nav>
    )
}

export default Navigation;