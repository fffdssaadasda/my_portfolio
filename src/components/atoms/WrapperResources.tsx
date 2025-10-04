import { motion } from 'framer-motion'
import React from 'react'
const WrapperResources = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[95%] z-[999999999] min-h-[80vh]">
            {children}
        </motion.div>
    )
}

export default WrapperResources