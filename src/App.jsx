import React from 'react'
import mainBg from '/bg2.webp'
import { motion } from 'framer-motion'
import Card from "./components/Cards"
import { useInView } from 'react-intersection-observer'

const App = () => {

    const variants = {
        initial: {
            y: 0
        },
        animate: {
            y: [0, -40, 0, -20, 0, -30, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    }

    return (
        <>
            <section className='w-full min-h-screen h-auto bg-[#111111] md:bg-main md:bg-cover bg-phoneBg bg-[center_right_45%] md:bg-br md:shadow-bgShadow shadow-phoneShadow font-quick flex items-center'>
                <div className='max-w-[1700px] w-full h-full p-14 flex mx-auto lg:flex-row flex-col lg:gap-0 gap-y-20'>
                    <div className='text-white my-auto h-auto'>
                        <h1 className='font-black lg:text-5xl font-sora lg:w-[40rem] text-3xl'>Alucard: The Next Generation Anime Token</h1>
                        <p className='tracking-[.25em] lg:w-[40rem] opacity-80 mt-5 lg:leading-7 leading-6 lg:text-sm text-xs'>ALUCARD IS AN ENIGMATIC AND FORMIDABLE ENTITY, EMBODYING BOTH VILLAINY AND HEROISM. HIS FORMIDABLE POWER, UNMATCHED REGENERATIVE ABILITIES, AND UNPREDICTABLE BEHAVIOUR MAKE HIM A TOKEN TO BE FEARED BY MANY.</p>

                        <div className='mt-10 flex gap-x-2 lg:flex-row flex-col gap-y-5 lg:gap-y-0'>
                            <div className='border-2 border-myRed md:bg-black text-white lg:w-fit h-fit text-center px-9 py-3 cursor-pointer hover:bg-myRed transition-all ease-in-out duration-300 w-full'>Buy Token</div>
                            <div className='border-2 border-myRed md:bg-black text-white lg:w-fit w-full text-center h-fit px-9 py-3 cursor-pointer hover:bg-myRed transition-all ease-in-out duration-300'>Chart</div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-full'>
                        <motion.img variants={variants} initial="initial" animate="animate" src="/hero1.webp" alt="icon" className='lg:w-[14rem] w-[11rem]'></motion.img>
                    </div>
                </div>
            </section>

            <section className='w-full h-auto bg-black p-10'>

                <div className='max-w-[1700px] w-full h-full flex mx-auto lg:flex-row flex-col lg:gap-0 gap-y-20 text-white items-center justify-center'>
                    <div className="font-inter lg:p-14 lg:w-auto lg:max-w-[26rem]">
                        <p className='opacity-70 font-inter text-xs'>OUR UTILITIES</p>
                        <h1 className='font-sora text-4xl lg:w-[18rem] mt-6'>Be Secured with Alucard</h1>
                        <p className='opacity-70 text-[14px] mt-6 lg:max-w-[20rem] leading-8 tracking tracking-[.25em]'>ALUCARD IS AN INNOVATIVE MEME TOKEN PROJECT THAT OFFERS UNPRECEDENTED SECURITY AND UTILITIES FOR INVESTORS.</p>
                    </div>
                    <div className='flex gap-x-5 md:flex-row flex-col w-fit'>
                        <motion.div>
                            <Card src="/util1.webp" title="AI Generator" desc="This project focuses on creating an Artificial Intelligence AI-driven image generator that produced Dark Themed images." />
                        </motion.div>

                        <motion.div className='mt-7'>
                            <Card src="/uti2.webp" title="NFT Collections" desc="The ultimate utility offering users the ability to showcase, securely store, and trade their rare and valuable NFTs. and find other users to join in on their NFT trading adventures." />
                        </motion.div>

                        <motion.div className='mt-14'>
                            <Card src="/util3.webp" title="Artwork Competition" desc="We seek to bring together artists, graphic designers, and digital enthusiasts of all skill levels to create or participate in online competitions and create beautiful, unique digital artwork." />
                        </motion.div>

                    </div>
                </div>

            </section>
        </>

    )
}

export default App