import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "@/hook/useThemeSwitcher"
import { useState } from "react"

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-500 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}

            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-500 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}

            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header
            className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8 ">
            <button className="flex-col justify-center items-center hidden  lg:!flex" onClick={handleClick} >
                <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className="flex items-center justify-between w-full lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Project" className="mx-4" />
                    {/* <CustomLink href="/article" title="Article" className="ml-4" /> */}
                </nav>
                <nav className="flex flex-wrap justify-center items">
                    <motion.a href="https://www.linkedin.com/in/tan-vo/" target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/minhtan7" target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 bg-light dark:bg-dark "
                    >
                        <GithubIcon />
                    </motion.a>
                    <button
                        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                    >
                        {mode === "dark" ?
                            <SunIcon className={"fill-dark"} /> :
                            <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}

                        className="min-w-[70vw] z-30 flex flex-col justify-between items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32
            ">
                        <nav className="flex flex-col items-center justify-center ">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Project" className="" toggle={handleClick} />
                            <CustomMobileLink href="/article" title="Article" className="" toggle={handleClick} />
                        </nav>
                        <nav className="flex flex-wrap justify-center mt-2 items">
                            <motion.a href="/" target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 sm:mx-1"
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="/" target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 ml-3 rounded-full bg-light dark:bg-dark sm:mx-1 "
                            >
                                <GithubIcon />
                            </motion.a>
                            <button
                                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                            >
                                {mode === "dark" ?
                                    <SunIcon className={"fill-dark"} /> :
                                    <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">

                <Logo />
            </div>
        </header>
    )
}

export default NavBar