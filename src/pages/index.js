import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { AstronautIcon, LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tan Vo</title>
        <meta name="description" content="This is a personal website of Tan Vo - full-stack developer" />

      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className='pt-0 md:p-10 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full sm:relative sm:h-96 sm:w-96'>
              <AstronautIcon className="w-full sm:h-96 lg:hidden md:inline-block md:w-full sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2" />
            </div>
            <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
              <AnimatedText text="From Healing to Coding: A Developer's Unique Journey" className="!text-5xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              " />
              <p className='my-4 text-base, font-medium md:text-sm sm:text-xs'>As a full-stack developer with a medical background, I blend passion, technical expertise, and collaboration to build web solutions that positively impact projects and improve people&apos;s lives.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/CV-Tan_Vo.pdf" target='_blank' download={true}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  md:p-2 md:px-4 md:text-base
                  '>
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:tan.vopm@gmail.com"
                  className='ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base '
                >Contact</Link>
              </div>
            </div>

          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
