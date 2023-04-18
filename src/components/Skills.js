import { motion } from "framer-motion"

const Skill = ({ name, x, y, color, level }) => {
    return (
        <motion.div className={`flex rounded items-center justify-center me-3 
                border-dark border-2 font-medium 
                bg-light text-dark
                py-3 px-6 shadow-dark cursor-pointer  dark:text-light dark:bg-dark
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dar:bg-transparent
                xs:font-bold
                hover:bg-dark hover:text-light
                dark:hover:bg-light dark:hover:text-dark
                relative group
                ${color}
                `}
            // whileHover={{ scale: 1.05 }}
            // initial={{ x: 0, y: 0 }}
            // whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            // viewport={{ once: true }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <span className="sm:text-sm lg:text-base">{name}</span>
            {/* <span class="group-hover:opacity-100 transition-opacity bg-light px-3  
            text-sm text-dark rounded-md absolute left-1/2 top-1/3  border-primary border
            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto
            after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-primary
            ">{level}</span> */}

        </motion.div>
    )
}

// const Skills = () => {
//     return (
//         <>
//             <h2 className="mt-64 font-bold text-center text-8xl w0full // md:text:6xl md:mt-32 ">Skills</h2>
//             <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
//             lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
//             lg:bg-circularLightLg lg:dark:circularDarkLg
//             md:bg-circularLightMd lmd:dark:circularDarkMd
//             sm:bg-circularLightSm sm:dark:circularDarkSm
//             ">
//                 <motion.div className="flex items-center justify-center p-8 rounded-full cursor-pointer bg-dark text-light // shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 "
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     Web
//                 </motion.div>
//                 <Skill name="CSS" x="-5vw" y="-10vw" />
//                 <Skill name="HTML" x="-25vw" y="2vw" />
//                 <Skill name="Javascript" x="20vw" y="6vw" />
//                 <Skill name="NextJS" x="-20vw" y="-15vw" />
//                 <Skill name="Java" x="15vw" y="-12vw" />
//                 <Skill name="MongoDB" x="32vw" y="-5vw" />
//                 <Skill name="ExpressJS" x="0vw" y="-20vw" />
//                 <Skill name="ReactJS" x="-25vw" y="18vw" />
//                 <Skill name="Bootstrap CSS" x="18vw" y="18vw" />

//             </div>
//         </>
//     )
// }

const SKILLS = {
    languages: [["HTML/CSS", "Advanced"], ["Javascript", "Advanced"], ["Java", "Intermediate"]],
    "frameworks": [["React", "Advanced"], ["Next", "Advanced"], ["React Native", "Basic"], ["Express", "Advanced"], ["Spring", "Basic"]],
    database: [["MongoDB", "Advanced"], ["PostgreSQL", "Basic"]],
    network: [["Linux", "Basic"]],
    "other Libraries": [["Redux", "Advanced"], ["Context", "Advanced"]],
}

const LEVELS = ["Advanced", "Intermediate", "Basic"]

const switchColor = (type) => {
    switch (type) {
        case "Advanced":
            return "bg-teal-600 dark:bg-slate-700 text-light "
        case "Intermediate":
            return "bg-teal-300 dark:bg-slate-500 dark:text-white"
        case "Basic":
            return "bg-teal-50 dark:bg-slate-300 dark:text-black"
        default:
            return "bg-primary"
    }
}

const Skills = () => {
    return (
        <div>
            <h2 className="mt-64 mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16 md:mt-32 ">Skills</h2>
            <div className="w-[85%] md:w-full mx-auto">
                {Object.keys(SKILLS).map((key, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-8 sm:grid-cols-4">
                        <div className="col-span-1 m-auto ms-md-20">
                            <h3 className="text-2xl capitalize sm:text-sm">{key}</h3>
                        </div>
                        <ul className="flex flex-wrap col-span-2 sm:col-span-3">
                            {SKILLS[key].map(value => (
                                <li key={value}>
                                    <Skill name={value[0]}
                                        color={switchColor(value[1])}
                                        level={value[1]}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex justify-center w-[85%] m-auto">
                    <div className="flex ">
                        {LEVELS.map(level => (
                            <button key={level}
                                className={`flex rounded items-center justify-center me-3 
                        border-dark border-2 font-normal text-sm sm:text-xs
                        bg-light text-dark
                        py-1 px-2 shadow-dark cursor-pointer  dark:text-light dark:bg-dark
                        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dar:bg-transparent
                        hover:bg-dark hover:text-light
                        relative group 
                        ${switchColor(level)}`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills