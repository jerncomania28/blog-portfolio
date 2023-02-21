
import { motion } from "framer-motion";



interface CustomCursorProps {
    variants: any;
    customVariant: string;
}

const CustomCursor = ({ variants, customVariant }: CustomCursorProps) => {

    return (
        <motion.div
            className="hidden md:flex jusify-center items-center w-[20px] h-[20px] border-[1px] border-solid border-white rounded-full fixed top-0 left-0 z-20 pointer-events-none"
            variants={variants as any}
            animate={customVariant}
        />
    )
}

export default CustomCursor;