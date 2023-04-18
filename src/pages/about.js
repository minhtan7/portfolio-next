import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/tanvo.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}></span>
    )
}

const about = () => {
    return (
        <>
            <Head>
                <title>Tan Vo | About Page</title>
                <meta name="description" content="Get to know Tan Vo" />
            </Head>
            <TransitionEffect />
            <main className='flex flex-col items-center justify-center w-full dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Medical Mind, Developer's Code!" className="mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 " />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='flex flex-col items-start justify-start col-span-5 xl:col-span-4 md:order-2 md:col-span-8 '>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                - I&apos;m <b>Tan Vo</b>, <i>a diligent and adaptable software developer</i> with a unique background as a former medical doctor. Currently pursuing my degree at <a href='https://maynoothuniversity.ie/' className='text-primary dark:text-primaryDark' target="_blank">Maynooth University</a>, I strive to create a meaningful impact on projects and improve lives. As a Full Stack Web Developer at <a href="https://www.medlangfanatic.com" target="_blank" className='text-primary dark:text-primaryDark'>Med Lang Fanatic</a>, I played a pivotal role in development and business decision-making, working as the solo developer on a project.
                            </p>
                            <p className='my-4 font-medium'>
                                - Concurrently, I gained experience as a <i>coding instructor</i> in a Full Stack Web Development Bootcamp at <a href="https://www.coderschool.vn/en" target="_blank" className='text-primary dark:text-primaryDark'>Coderschool</a>, showcasing my technical and soft skills. My passion for continuous learning drives my ambition to join a company with challenging opportunities to enhance my skills and contribute to its success.
                            </p>
                            <p className='font-medium'>
                                - With a diverse background, technical expertise, and collaboration, I am an ideal candidate for roles requiring working with many people on <i>high-performance projects</i>. I welcome new opportunities, learning experiences, and networking with professionals in the tech industry. Please don&apos;t hesitate to contact me on <a href='https://www.linkedin.com/in/tan-vo/' className='font-bold'>LinkedIn</a> or at  <Link href="mailto:tan.vopm@gmail.com" className='font-bold'>tan.vopm@gmail.com</Link>. I&apos;m excited to explore possibilities where I can make a significant impact and further develop my expertise.
                            </p>
                        </div>
                        <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="tan-vo" className='w-full h-auto rounded-2xl' />

                        </div>
                        {/* <div className='flex flex-col items-end justify-between col-span-2 first-letter: xl:col-span-8 xl:flex-row xl:items-center md:order-3 '>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl '>
                                    <AnimatedNumbers value={50} />
                                    +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>satisfied client</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl '>
                                    <AnimatedNumbers value={40} />
                                    +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>project completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl '>
                                    <AnimatedNumbers value={2} />
                                    +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>year of experience</h2>
                            </div>
                        </div> */}
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about