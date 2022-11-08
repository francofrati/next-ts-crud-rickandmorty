import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ img, name, specie, id, origin, status, gender }: any) => {

    const statusClassName = () => {
        if (status === 'Alive') return 'status_alive'
        if (status === 'Dead') return 'status_dead'
        return 'status_unknown'
    }

    return (
        <motion.div
            className='text-white w-3/4 m-auto card_bg rounded-[15px] overflow-hidden md:max-w-[700px]'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
                opacity: 1, scale: 1, transition: {
                    type: 'spring',
                    bounce: .6,
                    duration: .6,
                    delay:.2
                }
            }}
            viewport={{ once: true, amount: 1 }}
        >
            <div className='w-full text-center text-3xl font-bold bg-green-600 mb-3'>
                Multiverse ID
            </div>
            <div className='w-full flex flex-col md:flex-row gap-[10px] px-4'>
                <div className='md:w-full md:flex md:flex-col md:justify-center md:items-center md:min-w-[210px]'>
                    <img
                        src={img}
                        alt={name}
                        className='h-[210px] md:h-[210px] md:w-[210px] m-auto rounded-[10px] border-2 p-[2px] border-green-700' />
                    <div className='w-full md:flex hidden md:max-w-[210px] justify-between px-1'>
                        <div className='font-bold text-xl'>#{id}</div>
                        <div className='flex items-center gap-2 font-bold text-xl'><div className={`h-3 w-3 rounded-full ${statusClassName()}`}></div>{status}</div>
                    </div>
                </div>
                <div className='w-full flex justify-between px-10 md:hidden'>
                    <div className='font-bold text-xl'>#{id}</div>
                    <div className='flex items-center gap-2 font-bold text-xl'><div className={`h-3 w-3 rounded-full ${statusClassName()}`}></div>{status}</div>
                </div>
                <div className=' w-full flex flex-col gap-[10px] p-2'>
                    <div className='flex flex-col flex-wrap border-b justify-between items-start'>
                        <div className='font-bold text-sm text-green-500'>name:</div>
                        <div className='font-semibold w-full text-center  text-xl'>{name}</div>
                    </div>
                    <div className='flex flex-col flex-wrap border-b justify-between items-start'>
                        <div className='font-bold text-sm text-green-500'>specie:</div>
                        <div className='font-semibold w-full text-center text-xl '>{specie}</div>
                    </div>
                    <div className='flex flex-col flex-wrap border-b justify-between items-start'>
                        <div className='font-bold text-sm text-green-500'>gender:</div>
                        <div className='font-semibold w-full text-center text-xl '>{gender}</div>
                    </div>
                    <div className='flex flex-col flex-wrap border-b justify-between items-start'>
                        <div className='font-bold text-sm text-green-500'>origin:</div>
                        <div className='font-semibold w-full text-center text-sm '>{origin}</div>
                    </div>
                </div>
            </div>
            <div className='h-8 bg-green-600 mt-3' />
        </motion.div>
    )
}

export default Card