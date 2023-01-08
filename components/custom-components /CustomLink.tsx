

export interface CustomLinkProps {
  children: React.ReactNode
  href: string
  props: any
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, href, ...props }) => {

  return (
    <a
      href={href} {...props}
      className="relative inline-block text-custom-grey capitalize mx-2 before:transition-all font-alclonica before:duration-300 before:ease-in-out before:content-[''] before:h-[2px] before:absolute before:-bottom-1 before:left-0 before:w-[40%] before:bg-charcoal hover:before:w-full"
    >
      {children}
    </a>
  )

}

export default CustomLink;