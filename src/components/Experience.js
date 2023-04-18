import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-center
    md:w-[80%]
    ">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-[100%]"
        >
            <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
                {position}&nbsp;
                <a href={companyLink} className="capitalize text-primary dark:text-primaryDark">@{company}</a>
            </h3>
            {time.map((t, index) => (
                <p key={index} className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm ">
                    {t} | {address}
                </p>

            ))}
            <ul className="w-full font-medium md:text-sm">
                {work.map((w, index) => (
                    <li key={index} className="relative ml-4 list-none 
                    before:content-['•'] before:absolute before:-left-4
                    ">{w}</li>

                ))}
            </ul>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className="my-64">
            <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div ref={ref} className="w-[90%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="flex flex-col items-start justify-between w-full ml-4">
                    <Details
                        position="Full-Stack Web Development Instructor"
                        company="Coderschool"
                        companyLink="https://coderschool.vn/en"
                        time={[
                            "Part-time since 07/2022 - now",
                            "Full-time since 12/2021"
                        ]}
                        address="Ho Chi Minh city Vietnam"
                        work={[
                            "Lectured full-time classes of size 20 students and mentored students through individual one-on-one sessions with a 9/10 average weekly student rating.",
                            "Trained over 80 students with 90% of graduates securing jobs.",
                            "Trained 2 teaching assistants and 1 instructor in workflows, technical debugging, grading exercises, as well as interpersonal communication and student motivation.",
                            "Assisted students with graduate projects, providing planning guidance, ensuring completion within 2 weeks through daily stand-ups and progress tracking.",
                            "Updated learning materials by researching emerging technologies and simplifying complex concepts for students.",
                            "Collaborated with 3 instructors to prepare course materials, quizzes, and projects.",
                            <ul key={"subjects"}>Teaching Subjects:
                                <li>- HTML/CSS, JavaScript</li>
                                <li>- React, Express, MongoDB, Node, Redux, Redux Toolkit, Bootstrap, Material UI</li>

                            </ul>
                        ]}
                    />

                    <Details
                        position="Web Developmer"
                        company="Med Lang Fanatic Start-up"
                        companyLink="https://medlangfanatic.com"
                        time={[
                            "Part-time 07/2020 – now"
                        ]}
                        address="Ho Chi Minh city Vietnam"
                        work={[
                            "Developed a full-stack website, increasing user engagement and retention.",
                            "Designed user flows and product displays, boosting conversion rates.",
                            "Implemented quiz test functionality with user sign-in, keeping users on the website and suggesting related courses based on their scores and test categories.",
                            "Optimized the website for SEO.",
                            "Built and engaged a cross-functional team of 5 members, fostering a collaborative environment.",
                            "Contributed to pricing and user interest decisions.",

                        ]}
                    />

                    <Details
                        position="Medical Doctor"
                        company="Nguyen Trai Hospital"
                        companyLink="http"
                        time={[
                            "Full-time 06/2020 – 11/2020"
                        ]}
                        address="Ho Chi Minh city Vietnam"
                        work={[
                            <ul key={"nguyen-trai"}>
                                Working as a Medical Doctor in two positions:
                                <li>- Seeing patient at Musculoskeletal Department</li>
                                <li>- Manage quality of the hospital at Quality Management Department</li>
                            </ul>




                        ]}
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience