import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import mlf from "../../public/images/project_mlf.jpeg"
import tmed from "../../public/images/tmed-thumbnail.jpg"
import pokedex from "../../public/images/pokedex.jpg"
import devfest from "../../public/images/devfest.jpg"
import simon from "../../public/images/simon.jpg"



import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImg = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />

            <Link href={link} target="_blank" className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full ">
                <FramerImg src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="flex items-center mt-2">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base ">
                        Visit project
                    </Link>

                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4 ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link href={link} target="_blank" className="w-full overflow-hidden rounded-lg cursor-pointer ">
                <FramerImg src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className="flex flex-col items-start justify-between w-full mt-4">
                <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base"
                >{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">{title}</h2>
                </Link>
                {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
                <div className="flex items-center justify-between w-full mt-2">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Tan Vo | Project Page</title>
                <meta name="description" content="This is Tan Vo" />
            </Head>
            <TransitionEffect />
            <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Driven by Curiosity and Innovation!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Med Lang Fanatic"
                                summary="Med Lang Fanatic is an innovative medical English course platform designed for medical professionals and students looking to enhance their English skills in the medical field. The Vietnam-based start-up offers a wide range of engaging courses and valuable resources to help users elevate their medical English proficiency."
                                img={mlf}
                                link="https://medlangfanatic.com"
                                github="https://github.com/minhtan7/medlangfanatic-fe-nextjs"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="TMED"
                                summary="TMED is a doctor appointment booking website designed specifically for doctors and patients up to ten years old. The platform enables users to easily manage appointments and access various features tailored for both doctors and patients."
                                img={tmed}
                                link="https://tmed.netlify.app/"
                                github="https://github.com/minhtan7/tmed-fe"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Google DevFest HCMC 2021"
                                summary="DevFest HCM is an event organized by the Google Developer Group in Ho Chi Minh City, Vietnam. This website serves as the official platform for showcasing the event, providing updates, sharing blog posts, and announcing recruitment news from various companies. The website was originally hosted on the domain devfesthcm.com. However, the domain has expired, and the website is now hosted on a Netlify subdomain."
                                img={devfest}
                                link="https://devfesthcm.netlify.app/"
                                github="https://github.com/minhtan7/devfest"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Pokedex clone"
                                img={pokedex}
                                link="https://pokedex-mt.netlify.app/"
                                github="https://github.com/minhtan7/pokedex-fe"
                            />
                        </div>


                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project"
                                title="Simon game"
                                img={simon}
                                link="https://minhtan7.github.io/simongame/"
                                github="https://github.com/minhtan7/simongame"
                            />
                        </div>

                    </div>

                </Layout>

            </main>
        </>
    )
}

export default projects