import React from 'react'
import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'


const Transition = ({ children }: React.PropsWithChildren<{}>) => {

    const {asPath} = useRouter()

    return (
        <div>
            <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div 
                key={asPath}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1,ease:'easeInOut'}}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Transition