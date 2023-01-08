import Image from "next/image";


export interface CustomImageProps {
  src: string
  alt: string
  props: any
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {

  return (
    <Image src={src} alt={alt} {...props} fill className="my-3" />
  )

}

export default CustomImage;