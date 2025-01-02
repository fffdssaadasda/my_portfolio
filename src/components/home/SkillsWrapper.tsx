"use client"
import react from "@/imgs/7423888_react_react native_icon.png"
import next from "@/imgs/9073320_nextjs_icon.png"
import tailwindcss from "@/imgs/9073628_tailwind_icon.svg"
import node from "@/imgs/1012818_code_development_logo_nodejs_icon.svg"
import mongoDB from "@/imgs/1012822_code_development_logo_mongodb_programming_icon.svg"
import jwt from "@/imgs/jwt-3.svg"
import react_query from "@/imgs/react-query-seeklogo.png"
import redux from "@/imgs/redux.svg"
import mongoose from "@/imgs/mongoose5_62x30_transparent.png"
import { motion } from "framer-motion"
const SkillsWrapper = () => {
    return (
        <motion.div
            initial={{ x: "0vw" }}
            animate={{ x: "-100vw" }}
            exit={{ x: '100vw' }}
            transition={{ repeat: Infinity, duration: 30 }}
            className="flex wrapper min-h-[35vh]   items-center gap-10">
            {[react, next, tailwindcss, node, mongoDB, jwt, redux, mongoose].map(e => (
                <img
                    key={e.src}
                    alt={e}
                    src={e.src}
                    className="w-[150px] max-sm:w-[200px]  min-h-[100px]"
                />
            ))}
        </motion.div>
    )
}

export default SkillsWrapper