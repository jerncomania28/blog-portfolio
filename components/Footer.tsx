import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

interface FooterLinkProps {
    name: string;
    href: string;
}

const FooterLinkStyle = ({ icon, href, textEnter, textLeave }: { icon?: string, href: string, textEnter: () => void, textLeave: () => void }) => {
    return (
        <motion.a
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
        >
            <Image src={icon as string} alt="social-icon" width={40} height={40} />
        </motion.a>
    )

}

const Footer = () => {

    const { textEnter, textLeave } = useContext(AppContext)

    const FOOTER_LINKS: FooterLinkProps[] = [
        {
            name: '/assets/twitter.svg',
            href: "https://twitter.com/OkonJeremiah4?t=yvWDA9aQpwif2t7sj70uqg&s=09"
        },
        {
            name: '/assets/instagram.svg',
            href: "https://www.instagram.com/okonjeremiah__/"

        },
        {
            name: '/assets/github.svg',
            href: "https://github.com/jerncomania28"
        },
        {
            name: '/assets/linkedin.svg',
            href: "https://www.linkedin.com/in/okon-jeremiah"
        },
        {
            name: '/assets/dev.svg',
            href: "https://dev.to/jerncomania"
        }
    ]

    return (
        <footer className="w-full relative my-4 ">

            {/* link elements */}
            <div className="flex text-[12px] text-custom-grey w-[80%] mx-auto justify-center items-center flex-wrap my-3">
                {
                    FOOTER_LINKS.map((footerLink, _idx) => (
                        <FooterLinkStyle
                            icon={footerLink.name}
                            href={footerLink.href}
                            key={_idx}
                            textEnter={textEnter}
                            textLeave={textLeave}
                        />
                    ))
                }

            </div>

            <p className="text-custom-grey text-[8px] w-[80%] mx-auto text-center font-alclonica">
                Jerncomania &copy; 2022 . All Rights Reserved Jeremiah Okon
            </p>

        </footer>
    )
}

export default Footer;
