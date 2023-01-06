import { GetStaticProps, InferGetStaticPropsType } from "next";
import BlogPostPreview from "../../components/BlogPostPreview";
import HeaderStyle from "../../components/HeaderStyle";
import BLOG_DATA from "../../blog_sample_data.json"

import { getAllArticles } from "../../utils/mdx";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="relative w-[90%] md:w-[80%] mx-auto my-8">

            <HeaderStyle headerClassName='text-[30px] whitespace-nowrap'>
                All Articles
            </HeaderStyle>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 my-6'>
                {
                    posts.map((data: any, _idx: number) => (
                        <BlogPostPreview key={_idx} data={data} />
                    ))
                }
            </div>
        </div>
    )
}


export default Blog;


export const getStaticProps: GetStaticProps = async () => {
    const articles = await getAllArticles()

    articles
        .sort((a, b) => {
            if (a.publishedAt > b.publishedAt) return 1
            if (a.publishedAt < b.publishedAt) return -1
            return 0
        })

    return {
        props: {
            posts: articles.reverse()
        }
    }

}