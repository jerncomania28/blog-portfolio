
import BlogPostPreview from "../../components/BlogPostPreview";
import HeaderStyle from "../../components/HeaderStyle";
import BLOG_DATA from "../../blog_sample_data.json"

const Blog = () => {
    return (
        <div className="relative w-[90%] md:w-[80%] mx-auto my-8">

            <HeaderStyle headerClassName='text-[30px] whitespace-nowrap'>
                All Articles
            </HeaderStyle>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 my-6'>
                {
                    BLOG_DATA.map((data, _idx) => (
                        <BlogPostPreview key={_idx} data={data} />
                    ))
                }
            </div>
        </div>
    )
}


export default Blog;