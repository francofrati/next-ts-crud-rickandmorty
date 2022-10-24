import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { fetchCharacters } from '../../utils'
import Link from 'next/link'
import Card from '../components/Card'


interface Character {
    id: number
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: object
    image: string
    episode: Array<string>
    url: string
    created: string
}

interface EndpointRes {
    info: {
        next: string
        prev: string
        count: number
        pages: number
    }
    results: Character[]
}



const Personajes: NextPage = () => {

    const [charactersInfo, setCharactersInfo] = useState<EndpointRes>()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        fetchCharacters()
            .then(r => {
                setCharactersInfo(r)
                setLoading(true)
            })
    }, [])

    const handleNextPage = () => {

        fetchCharacters(charactersInfo?.info.next)
            .then(r => {
                setCharactersInfo(r)
                setPage(page => page + 1)
            })

    }

    useEffect(() => {
        console.log(charactersInfo)
    }, [charactersInfo])


    return (
        <div className='w-screen border'>
            <h1 className='text-[#2c7ff7] text-2xl font-bold text-center'>PERSONAJES</h1>
            <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div
                    key={page}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='flex flex-col gap-20'
                >
                    {charactersInfo?.results.map(c => {
                        return <Card
                            key={c.id}
                            name={c.name}
                            status={c.status}
                            gender={c.gender}
                            origin={c.origin.name}
                            img={c.image}
                            id={c.id}
                            specie={c.species}
                        />
                    })}
                </motion.div>
            </AnimatePresence>
            <button
                onClick={handleNextPage}
                className='bg-[#2c7ff7] text-black cursor-pointer p-2 duration-75 hover:scale-105'>
                pagina siguiente
            </button>
            <button onClick={() => setLoading(prevState => !prevState)} className='text-white'>loading</button>

            <Link href={'/'} scroll={false}>
                <a className='text-white'>Home</a>
            </Link>
        </div>

    )
}


export default Personajes