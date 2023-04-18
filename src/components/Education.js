import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"
import Link from "next/link"


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-center
    md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-[100%]"
        >
            <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
                {type}
            </h3>
            <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>
            <ul className="w-full font-medium md:text-sm">
                {info.map((inf, index) => (
                    <li key={index} className="relative ml-4 list-none 
                    before:content-['•'] before:absolute before:-left-4
                    ">{inf}</li>

                ))}
            </ul>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className="my-64">
            <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div ref={ref} className="w-[90%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
                    <Details
                        type="Higher Diploma in Science (Software Development)"
                        time="08/2022 – Now"
                        place="NUI - Maynooth University"
                        info={[
                            "Completion date 30/05/2023",
                            <span key="appendix">Expected result (based on semester 1): <b>1.1 Honours</b>. (Appendix)</span>
                        ]}
                    />

                    <Details
                        type="Full-Stack Web Development Bootcamp"
                        time="12/2020 – 03/2021"
                        place="Coderschool"
                        info={[
                            <span key="appendix">Top 3 final projects (<Link href={"/project"}>TMed</Link>)</span>,
                            "Full-Stack Web Development course: a three-month full-time Bootcamp that delivers a considerable amount of knowledge for those who aim to shift their career to the IT field"
                        ]}
                    />

                    <Details
                        type="Doctor of Medicine"
                        time="09/2013 – 09/2019"
                        place="Pham Ngoc Thach University of Medicine"
                        info={[
                            "Strengthened soft skills such as adaptability, effective communication, and teamwork through diverse medical experiences",
                            "Cultivated critical thinking and problem - solving abilities to make informed decisions in various medical situations",
                            "Demonstrated proficiency in medical ethics and maintaining patient confidentiality while working collaboratively with healthcare teams"
                        ]}
                    />

                    <Details
                        type="Students | Mathematic Major"
                        time="09/2010 – 09/2013"
                        place="Luong The Vinh, high school for the gifted of Dong Nai province"
                        info={[]}
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education