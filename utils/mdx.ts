import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";

const path = require('path');
const articlesPath = path.join(process.cwd(), `/data/articles`)

export const getSlug = async () => {

  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  })

}

export const getArticleFromSlug = async (slug: string) => {

  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = readFileSync(articleDir);

  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source.toString('utf-8')).text,
      ...data,
    },
  }
}

export async function getAllArticles() {
  const articles = readdirSync(path.join(process.cwd(), 'data/articles'))

  return articles.reduce((allArticles: any[], articleSlug: string) => {
    // get parsed data from mdx files in the "articles" dir
    const source = readFileSync(
      path.join(process.cwd(), 'data/articles', articleSlug),
      'utf-8'
    )
    const {data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ]
  }, [])
}