
import Link from "next/link";

import { motion } from "framer-motion";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface BlogPostPreviewProps {
    name: string;
    date: string;
    readTime: string;
    post: string;
    route: string;
}


const BlogPostPreview = ({ data }: { data: any }) => {

    const { textEnter, textLeave } = useContext(AppContext)

    return (
        <Link
            href={`/blog/${data.slug}`}
            className="relative border-b-[1px] border-solid border-charcoal text-left py-3 my-2"
        >
            <motion.h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-[24px] font-albert-sants font-bold font-alclonica tracking-wide my-2 text-custom-grey">{data.title}</motion.h1>
            <motion.p
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="my-2 text-custom-grey text-[18px] font-albert-sans"
            >
                <span>{data.publishedAt}</span> | <span>{data.readingTime}</span>
            </motion.p>
        </Link>
    )
}


export default BlogPostPreview;