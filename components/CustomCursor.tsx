
import { motion } from "framer-motion";



interface CustomCursorProps {
    variants: any;
    customVariant: string;
}

const CustomCursor = ({ variants, customVariant }: CustomCursorProps) => {

    return (
        <motion.div
            className="hidden md:flex w-[30px] h-[30px] rounded-full bg-white fixed top-0 left-0 z-20 pointer-events-none"
            variants={variants as any}
            animate={customVariant}
        />
    )
}

export default CustomCursor;