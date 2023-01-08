import Head from "next/head";
import { GetStaticPaths } from "next";

import dayjs from 'dayjs'
import rehypeSlug from 'rehype-slug'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// utils
import { getSlug, getArticleFromSlug } from "../../utils/mdx";

import CustomImage from "../../components/custom-components /CustomImage";
import CustomParagraph from "../../components/custom-components /CustomParagraph";
import CustomLink from "../../components/custom-components /CustomLink";

interface BlogPostProps {
  source: MDXRemoteSerializeResult
  frontmatter: any
}


const BlogPost = ({ post: { source, frontmatter } }: { post: BlogPostProps }) => {

  const components = {
    CustomImage,
    CustomParagraph,
    CustomLink
  }

  return (
    <div className="w-[90%] md:w-[60%] relative mx-auto ">

      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="mt-3 ">
        <h1
          className="text-[24px] font-albert-sants font-bold font-alclonica tracking-wide my-2 text-custom-grey"
        >{frontmatter.title}</h1>
        <p className="my-2 text-custom-grey text-[16px] font-albert-sans mb-4">
          {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
          {frontmatter.readingTime}
        </p>
        <div className="my-2 text-custom-grey text-[20px] font-albert-sans">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </div>
  )

}

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
} 