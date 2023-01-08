import Image from "next/image";


const CustomImage = ({ src, alt, ...props }: { src: string, alt: string, props: any }) => {

  return (
    <Image src={src} alt={alt} {...props} fill className="my-3" />
  )

}

export default CustomImage;