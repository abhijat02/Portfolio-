import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{y:0, opacity:1}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">
            Get in Touch
        </motion.h2>
        <div className="tracking-tighter text-center">
            <motion.p 
            whileInView={{x:0, opacity:1}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4">
                {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{x:0, opacity:1}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
            className="my-4">
                {CONTACT.phoneNo} 
            </motion.p>
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact