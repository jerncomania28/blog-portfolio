

interface FooterLinkProps {
    name: string;
    href: string;
}


const FooterLinkStyle = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="relative inline-block text-custom-grey capitalize mx-2 before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full" style={{ "fontFamily": "logo" }}>
            {children}
        </a>
    )

}



const Footer = () => {


    const FOOTER_LINKS: FooterLinkProps[] = [
        {
            name: "twitter",
            href: "https://twitter.com/OkonJeremiah4?t=yvWDA9aQpwif2t7sj70uqg&s=09"
        },
        {
            name: "instagram",
            href: "https://www.instagram.com/okonjeremiah__/"

        },
        {
            name: "github",
            href: "https://github.com/jerncomania28"
        },
        {
            name: "linkedIn",
            href: "https://www.linkedin.com/in/okon-jeremiah"
        },
        {
            name: "Dev.to",
            href: "https://dev.to/jerncomania"
        }
    ]

    return (
        <footer className="w-full relative">


            {/* link elements */}
            <div className="flex text-[12px] text-custom-grey w-[80%] mx-auto justify-center items-center my-3">
                {
                    FOOTER_LINKS.map((footerLink, _idx) => (
                        <FooterLinkStyle href={footerLink.href} key={_idx}>
                            {footerLink.name}
                        </FooterLinkStyle>
                    ))
                }

            </div>

            <p style={{ "fontFamily": 'logo' }} className="text-custom-grey text-[12px] w-[80%] mx-auto text-center ">
                Jerncomania &copy; 2022 . All Rights Reserved Jeremiah Okon
            </p>

        </footer>
    )
}

export default Footer;