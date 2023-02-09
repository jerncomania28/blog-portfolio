/* eslint-disable react/no-unescaped-entities */
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

//components
import HeaderStyle from '../components/HeaderStyle'
import ProjectPreview from '../components/ProjectPreview'

//image 
import ProfileImage from "../public/jeremiah.jpeg";

// data

import PORTFOLIO_DATA from "../project_data.json"

// types 
import { DataProps } from '../index.types'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogPostPreview from '../components/BlogPostPreview'

// utils
import { getAllArticles } from '../utils/mdx'

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const { textLeave, textEnter, textImage } = useContext(AppContext)

  return (
    <div className='w-full relative'>
      <Head>
        <title>Jeremiah Okon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/jeremiah.ico" />
      </Head>

      <main className='w-[90%] md:w-[80%] mx-auto text-custom-grey text-center relative font-family-albert-sans'>
        <div className='w-full relative flex flex-col my-6 justify-center items-center md:flex-row md:justify-between '>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={
              {
                duration: 0.5,
                delay: 0.2,
                default: { ease: "linear" }
              }
            }
            className='w-full relative flex justify-center flex-col items-center my-6 text-left md:w-[45%] text-[20px] md:my-auto overflow-hidden'>
            <motion.h1
              className='text-[25px] font-bold self-start my-2 font-alclonica'
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Jeremiah Okon
            </motion.h1>
            <motion.p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-[18px] font-proxima"
            >
              <p className='my-2'>Websites are like first impressions, and a bad one can mean lost customers.</p>

              <p className='my-2'>
                That's where I come in, I make websites that are easy on the eyes and fun to use.
                Think of me as the superhero of website design. With my powers of HTML, CSS, JavaScript, React, Firebase, TailwindCSS, and TypeScript, I'll make sure your customers stick around. And the best part? I bring the laughs too, because let's face it, a little humor goes a long way.
              </p>

              <p className='my-2'> So, if you want a website that's both good-looking and easy to use, I'm your guy.</p>
            </motion.p>
            <button
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className='py-2 px-8 text-black bg-custom-grey self-start my-3'>
              Hire Me
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              {
                duration: 0.7,
                delay: 0.2,
                default: { ease: "linear" }
              }
            }
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className='w-full relative h-[300px] my-3 md:w-[45%] flex justify-center items-center '>
            <Image
              src={ProfileImage}
              alt="profile"
              width={300}
              height={300}
              className="shadow-3xl"
            />
          </motion.div>

        </div>

        <div className='relative flex flex-col justify-center my-4'>
          <HeaderStyle className='mb-4' headerClassName='text-[30px]'>
            Portfolio
          </HeaderStyle>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 '>
            {
              PORTFOLIO_DATA.slice(0, 6).map((data: DataProps, _idx) => (
                <ProjectPreview key={_idx} data={data} textEnter={textImage} textLeave={textLeave} />
              ))
            }
          </div>


          <Link href={"/portfolio"} passHref>
            <HeaderStyle className='w-[300px] md:w-[400px] my-6' headerClassName='text-[15px] whitespace-nowrap'>
              view more
            </HeaderStyle>

          </Link>
        </div>


        <div className='relative flex flex-col justify-center my-4'>

          <HeaderStyle headerClassName='text-[30px]'>
            Articles
          </HeaderStyle>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 my-6'>
            {
              posts.map((data: any, _idx: number) => (
                <BlogPostPreview key={_idx} data={data} />
              ))
            }
          </div>

          <Link href={"/blog"} passHref>
            <HeaderStyle className='w-[300px] md:w-[400px] my-6' headerClassName='text-[15px] whitespace-nowrap'>
              view more
            </HeaderStyle>
          </Link>

        </div>


      </main >

    </div >
  )
}

export default Home



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