import Image from "next/image";


export interface CustomImageProps {
  src: string
  alt: string
  props: any
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {

  return (
    <img src={src} alt={alt} {...props} className="my-3 w-full" />
  )

}

export default CustomImage;