// import AnimatedText from "@/components/AnimatedText"
// import Layout from "@/components/Layout"
// import Head from "next/head"
// import Image from "next/image"
// import Link from "next/link"
// import project1 from "../../public/images/project1.jpeg"
// import { motion, useMotionValue } from "framer-motion"
// import { useRef } from "react"
// import TransitionEffect from "@/components/TransitionEffect"

// const FramerImg = motion(Image)

// const MovingImg = ({ title, img, link }) => {
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)
//     const imgRef = useRef(null)

//     const handleMouse = (e) => {
//         imgRef.current.style.display = "inline-block"
//         x.set(e.pageX)
//         y.set(-10)
//         console.log(x, y)
//     }

//     const handleMouseLeave = (e) => {
//         imgRef.current.style.display = "none"
//         x.set(0)
//         y.set(0)
//     }
//     return (
//         <Link href={link} target="_blank"
//             onMouseMove={handleMouse}
//             onMouseLeave={handleMouseLeave}
//         >
//             <h2 className="text-xl font-semibold capitalize hover:underline">{title}</h2>
//             <FramerImg ref={imgRef} src={img} alt={title} className="w-96 h-auto absolute rounded-lg z-10 md:!hidden"
//                 style={{ x: x, y: y, display: "none" }}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
//             />
//         </Link>
//     )
// }

// const Article = ({ img, title, date, link }) => {
//     return (
//         <motion.li
//             initial={{ y: 200 }}
//             whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
//             viewport={{ once: true }}
//             className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 rounded-xl // bg-light text-dark first:mt-0 border-slid border-dark sm:flex-col ">
//             <MovingImg title={title} img={img} link={link} />
//             <span className="pl-4 font-semibold text-primary sm:pl-0 xs:text-sm sm:self-start">{date}</span>
//         </motion.li>
//     )
// }

// const FeaturedArticle = ({ img, title, time, summary, link }) => {
//     return (
//         <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl">
//             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

//             <Link href={link} target="_blank"
//                 className="inline-block w-full overflow-hidden rounded-lg cursor-pointer // ">
//                 <FramerImg src={img} alt={title} className="w-full h-auto"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                 />
//             </Link>
//             <Link href={link} target="_blank">
//                 <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">{title}</h2>
//             </Link>
//             <p className="mb-2 text-sm">{summary}</p>
//             <span className="font-semibold text-primary">{time}</span>
//         </li>
//     )
// }

// const article = () => {
//     return (
//         <>
//             <Head>
//                 <title>Tan Vo | Article Page</title>
//                 <meta name="description" content="This is Tan Vo" />
//             </Head>
//             <TransitionEffect />
//             <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
//                 <Layout className="pt-16">
//                     <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
//                     <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
//                         <FeaturedArticle
//                             title="Build A Custom Pagination Component In Reactjs From Scratch"
//                             summary="Learn how to build a custom pagination component in ReactJS from scratch.
//                         Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
//                             time="9 min read"
//                             link="/"
//                             img={project1}
//                         />
//                         <FeaturedArticle
//                             title="Build A Custom Pagination Component In Reactjs From Scratch"
//                             summary="Learn how to build a custom pagination component in ReactJS from scratch.
//                         Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
//                             time="9 min read"
//                             link="/"
//                             img={project1}
//                         />
//                     </ul>
//                     <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">All Articles</h2>
//                     <ul>
//                         <Article
//                             title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
//                             img={project1}
//                             date="April 6, 2023"
//                             link="/"
//                         />
//                         <Article
//                             title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
//                             img={project1}
//                             date="April 6, 2023"
//                             link="/"
//                         />
//                         <Article
//                             title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
//                             img={project1}
//                             date="April 6, 2023"
//                             link="/"
//                         />
//                         <Article
//                             title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
//                             img={project1}
//                             date="April 6, 2023"
//                             link="/"
//                         />
//                     </ul>
//                 </Layout>
//             </main>
//         </>
//     )
// }

// export default article