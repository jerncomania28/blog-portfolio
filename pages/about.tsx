import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import HeaderStyle from "../components/HeaderStyle";
import ExperienceView from "../components/ExperienceView";
import ProgressBar from "../components/ProgressBar";

import EXPERIENCE_DATA from "../experience_data.json";

const About = () => {
    const { textEnter, textLeave } = useContext(AppContext);
    return (
        <div className="w-[90%] md:w-[80%] mx-auto text-custom-grey text-center relative font-family-albert-sans">

            {/* introduction */}
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
                    <motion.div
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="text-[18px] font-proxima"
                    >
                        <p className='my-2'>Websites are like first impressions, and a bad one can mean lost customers.</p>

                        <p className='my-2'>
                            That&apos;s where I come in, I make websites that are easy on the eyes and fun to use.
                            Think of me as the superhero of website design. With my powers of HTML, CSS, JavaScript, React, Firebase, TailwindCSS, and TypeScript, I&apos;ll make sure your customers stick around. And the best part? I bring the laughs too, because let&apos;s face it, a little humor goes a long way.
                        </p>

                        <p className='my-2'> So, if you want a website that&aposs both good-looking and easy to use, I&apos;m your guy.</p>

                    </motion.div>
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
                        src="/jeremiah.jpeg"
                        alt="profile"
                        width={300}
                        height={300}
                        className="shadow-3xl"
                    />
                </motion.div>

            </div>

            <div className='relative flex flex-col justify-center my-4 mb-8'>
                <HeaderStyle className='mb-4 whitespace-nowrap' headerClassName='text-[25px] md:text-[30px]'>
                    Recent Work Experience
                </HeaderStyle>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 '>
                    {
                        EXPERIENCE_DATA.map((data, _idx) => (
                            <ExperienceView
                                key={_idx}
                                name={data.name}
                                duration={data.duration}
                                role={data.role}
                                location={data.location}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='relative flex flex-col justify-center my-6'>
                <HeaderStyle className='mb-4 whitespace-nowrap' headerClassName='text-[25px] md:text-[30px]'>
                    Technologies
                </HeaderStyle>

                <div className="flex flex-col justify-center my-6">
                    <ProgressBar technology="HTML" percentage={95} />
                    <ProgressBar technology="CSS" percentage={90}/>
                    <ProgressBar technology="Sass" percentage={85}/>
                    <ProgressBar technology="tailwindcss" percentage={80}/>
                    <ProgressBar technology="Javascript" percentage={95} />
                    <ProgressBar technology="React" percentage={95}/>
                    <ProgressBar technology="NextJS" percentage={85}/>
                    <ProgressBar technology="Firebase" percentage={85}/>
                </div>
            </div>

        </div>
    )
}

export default About;