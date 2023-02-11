import React, { useEffect, useState } from 'react'
import mainBg from '/bg2.webp'
import { easeInOut, motion } from 'framer-motion'
import Card from "./components/Cards"
import { useInView } from 'react-intersection-observer'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const App = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [ref1, view1] = useInView(options)
    const [ref2, view2] = useInView(options)
    const [ref3, view3] = useInView(options)

    const [refsec, viewsec] = useInView(options)
    const [refallu, viewallu] = useInView(options)

    const [hDescRef, hDescView] = useInView(options)
    const [hRef, hView] = useInView(options)

    const [tokenRef, tokenView] = useInView(options)
    const [borderRef, borderView] = useInView(options)
    const [tImageRef, tImageView] = useInView(options)
    const [taxRef, taxView] = useInView(options)

    const [count, setCount] = useState(0)

    useEffect(() => {

        if (taxView) {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        setCount(val => val + 1)
                    }, i * 150)
                }
            }, 500)

        }

    }, [taxView])

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

    const historyVariant = {
        initial: {
            y: 0
        },

        animate: {

            y: [0, 40, -40, 40, 0],
            transition: {
                duration: 7,
                repeat: Infinity,
            }

        }
    }

    return (
        <>
            <section className='w-full min-h-screen h-auto bg-[#111111] md:bg-main md:bg-cover bg-phoneBg bg-[top_right_50%] md:bg-br md:shadow-bgShadow shadow-phoneShadow font-quick flex items-center'>
                <div className='max-w-[1700px] w-full h-full p-14 flex mx-auto lg:flex-row flex-col lg:gap-0 gap-y-20'>
                    <div className='text-white my-auto h-auto'>
                        <motion.h1 initial={{ x: "-110%", opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-black lg:text-5xl font-sora lg:w-[40rem] text-3xl'>Alucard: The Next Generation Anime Token</motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1, delay: 0.75 }} className='tracking-[.25em] lg:w-[40rem] opacity-80 mt-5 lg:leading-7 leading-6 lg:text-sm text-xs'>ALUCARD IS AN ENIGMATIC AND FORMIDABLE ENTITY, EMBODYING BOTH VILLAINY AND HEROISM. HIS FORMIDABLE POWER, UNMATCHED REGENERATIVE ABILITIES, AND UNPREDICTABLE BEHAVIOUR MAKE HIM A TOKEN TO BE FEARED BY MANY.</motion.p>

                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 0.7, delay: 1.3 }} className='mt-10 flex gap-x-2 lg:flex-row flex-col gap-y-5 lg:gap-y-0'>
                            <div className='border-2 border-myRed md:bg-black text-white lg:w-fit h-fit text-center px-9 py-3 cursor-pointer hover:bg-myRed transition-all ease-in-out duration-300 w-full'>Buy Token</div>
                            <div className='border-2 border-myRed md:bg-black text-white lg:w-fit w-full text-center h-fit px-9 py-3 cursor-pointer hover:bg-myRed transition-all ease-in-out duration-300'>Chart</div>
                        </motion.div>
                    </div>

                    <div className='flex items-center justify-center w-full'>
                        <motion.img variants={variants} initial="initial" animate="animate" src="/hero1.webp" alt="icon" className='lg:w-[14rem] w-[11rem]'></motion.img>
                    </div>
                </div>
            </section>

            <section className='w-full h-auto bg-black p-10 shadow-under z-10 md:pb-40'>

                <div className='max-w-[1700px] w-full h-full flex mx-auto lg:flex-row flex-col lg:gap-0 gap-y-20 text-white items-center justify-center'>
                    <div className="font-inter lg:p-14 lg:w-auto lg:max-w-[26rem]">
                        <p className='opacity-70 font-inter text-xs'>OUR UTILITIES</p>
                        <motion.h1 initial={{ opacity: 0, y: 200 }} animate={viewsec ? { opacity: 100, y: 0 } : {}} transition={{ duration: 1.5, ease: [.21, 1.03, .27, 1] }} className='font-sora text-4xl lg:w-[18rem] mt-6' ref={refsec}>Be Secured with Alucard</motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={viewallu ? { opacity: 100 } : {}} transition={{ duration: 1, delay: 0.7 }} className='opacity-70 text-[14px] mt-6 lg:max-w-[20rem] leading-8 tracking tracking-[.25em]' ref={refallu}>ALUCARD IS AN INNOVATIVE MEME TOKEN PROJECT THAT OFFERS UNPRECEDENTED SECURITY AND UTILITIES FOR INVESTORS.</motion.p>
                    </div>
                    <div className='flex gap-x-5 md:flex-row flex-col w-fit'>
                        <motion.div initial={{ opacity: 0 }} animate={view1 ? { y: [-250, 0], opacity: 100 } : {}} transition={{ duration: 1 }} className="z-10" ref={ref1}>
                            <Card src="/util1.webp" title="AI Generator" desc="This project focuses on creating an Artificial Intelligence AI-driven image generator that produced Dark Themed images." />
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={view2 ? { y: [250, 0], opacity: 100 } : {}} transition={{ duration: 1 }} className='mt-7' ref={ref3}>
                            <Card src="/uti2.webp" title="NFT Collections" desc="The ultimate utility offering users the ability to showcase, securely store, and trade their rare and valuable NFTs. and find other users to join in on their NFT trading adventures." />
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={view3 ? { y: [-250, 0], opacity: 100 } : {}} transition={{ duration: 1 }} className='mt-14' ref={ref2}>
                            <Card src="/util3.webp" title="Artwork Competition" desc="We seek to bring together artists, graphic designers, and digital enthusiasts of all skill levels to create or participate in online competitions and create beautiful, unique digital artwork." />
                        </motion.div>

                    </div>
                </div>

            </section>

            <section className='w-full min-h-screen h-auto bg-bgFixed shadow-fixedShadow bg-cover bg-fixed p-4'>
                <div className='max-w-[1700px] mx-auto flex h-full w-full p-4 mt-14 gap-x-10 flex-col lg:flex-row gap-y-10'>
                    <div className='flex items-center justify-center w-full'>
                        <motion.img variants={historyVariant} initial="initial" animate="animate" alt="hero2" src="/hero2.webp" className='w-[22rem]'></motion.img>
                    </div>
                    <div className="h-full w-full text-white flex items-center justify-center">
                        <div>
                            <motion.h1 initial={{ x: "-110%", opacity: 0 }} animate={hView ? { x: 0, opacity: 100 } : {}} transition={{ duration: 1 }} className='font-black lg:text-5xl font-sora lg:w-[40rem] text-3xl' ref={hRef}>THE HISTORY</motion.h1>
                            <motion.div initial={{ opacity: 0 }} animate={hDescView ? { opacity: 100 } : {}} transition={{ duration: 1, delay: 0.75 }} className='text-xs opacity-70 mt-6 leading-6 tracking tracking-[.25em] max-w-[33rem] flex flex-col gap-y-5' ref={hDescRef}>

                                <p className=''>ALUCARD IS THE CENTRAL CHARACTER AND MAIN ANTAGONIST OF THE HELLSING ANIME SERIES. HE IS A POWERFUL VAMPIRE AND MARTIAL ARTIST, WHO SERVES SIR INTEGRA FAIRBROOK WINGATES HELLSING, THE LEADER OF THE HELLSING ORGANIZATION, WHO SPECIALIZES IN PROTECTING THE BRITISH EMPIRE FROM SUPERNATURAL THREATS. ALUCARD WAS BORN IN THE EARLY 1400S AS VLAD TEPES, A RUTHLESS WARLORD IN WALLACHIA &#40;NOW ROMANIA&#41;.
                                </p>

                                <p className=''>
                                    HE WAS RENOWNED FOR HIS CRUELTY, WHICH WAS SO GREAT THAT, EVEN AFTER HIS DEATH, HIS NAME BECAME SYNONYMOUS WITH TERROR AND SADISM &#40;HENCE ALUCARD, THE ANAGRAM OF HIS NAME&#41;.
                                </p>

                                <p className=''>
                                    HE WAS EVENTUALLY KILLED BY ABRAHAM VAN HELLSING, WHO THEN BOUND THE VAMPIRE&#39;S SOUL TO AN IMMORTAL STATE. ALUCARD SUBSEQUENTLY BECAME THE HELLSING FAMILY&#39;S LOYAL SERVANT, AND HAS PROTECTED THE BRITISH EMPIRE FROM NUMEROUS THREATS SINCE THEN.
                                </p>
                                <p className=''>
                                    HE IS IMMENSELY POWERFUL, ABLE TO CONTROL MINDS AND MANIPULATE REALITY, AND IS ALSO SHOWN TO BE HIGHLY SKILLED IN HAND-TO-HAND COMBAT AND SWORDSMANSHIP.
                                </p>

                            </motion.div>
                        </div>


                    </div>
                </div>
            </section>

            <section className='w-full h-auto mx-auto shadow-top py-20'>
                <div className='max-w-[1700px] mx-auto text-white p-10 flex gap-x-14 flex-col lg:flex-row gap-y-14'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[25rem]]'>
                            <motion.h1 initial={{ x: "-110%", opacity: 0 }} animate={tokenView ? { x: 0, opacity: 100 } : {}} transition={{ duration: 1 }} className='font-black sm:text-5xl text-3xl font-sora text-center' ref={tokenRef}>TOKENOMICS</motion.h1>

                            <div className='font-inter flex justify-between sm:w-full lg:mt-8 mt-6 sm:flex-row flex-col mx-auto w-fit gap-y-8'>
                                <div className='w-fit' ref={taxRef}>
                                    <h1 className='text-percent sm:text-6xl text-5xl font-bold'>{count}%</h1>
                                    <p className='text-center mt-3'>Buy Tax</p>
                                </div>

                                <div className='w-fit'>
                                    <h1 className='text-percent sm:text-6xl text-5xl font-bold'>{count}%</h1>
                                    <p className='text-center mt-3'>Sell Tax</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full mx-auto'>
                        <div className='relative p-2 pl-5'>
                            <motion.div initial={{ x: "-70%", opacity: 0 }} animate={tImageView ? { x: 0, opacity: 100 } : {}} transition={{ duration: 1.8, ease: [.21, 1.03, .27, 1] }} className='w-[10rem] h-[10rem] border-white border-l-[5px] border-t-[5px] absolute top-0 left-0' ></motion.div>
                            <motion.img initial={{ opacity: 0 }} animate={tImageView ? { y: [250, 0], opacity: 100 } : {}} transition={{ duration: 1 }} src="/token.webp" alt="Token" className='w-full lg:w-auto' ref={tImageRef}></motion.img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-auto text-white border-t-[1px] border-red-900 p-16 relative'>
                <div className='max-w-[1700px] mx-auto flex items-center justify-between md:flex-row flex-col'>
                    <div className="w-full">
                        <h1 className='font-medium lg:text-4xl md:text-2xl font-sora text-2xl'>Business Inquiries and Proposals?</h1>
                        <h1 className='font-medium lg:text-4xl md:text-2xl font-sora text-2xl'>Send us an email.</h1>
                    </div>

                    <div className='border-2 border-myRed md:bg-black text-white md:w-fit h-fit text-center px-9 py-3 cursor-pointer hover:bg-myRed transition-all ease-in-out duration-300 w-full md:mt-0 mt-7 min-w-[12rem]'>Send an email</div>
                </div>

                <div className='bottom-0 absolute border-b-[1px] border-red-900 mx-auto w-[90%] left-0 right-0'>

                </div>
            </section>

            <footer className='w-full h-auto text-white pb-7'>
                <div className="max-w-[1700px] mx-auto flex flex-col items-center justify-center sm:px-28">
                    <div className='flex justify-between w-full items-center py-10 pt-20 flex-col md:flex-row'>
                        <div className=''>
                            <img src="/hero1.webp" alt="icon" className='lg:w-[13rem] w-[11rem] min-w-[8rem]'></img>
                        </div>
                        <div className='md:mr-16 mx-auto text-center md:text-left mt-10 md:mt-0'>
                            <h1 className='font-sora text-xl'>Contact Info</h1>
                            <p className='text-percent opacity-50 mt-4'>hello@alucard.world</p>
                            <div className='text-myRed cursor-pointer flex gap-x-3 mt-4'>
                                <SiTwitter className='hover:scale-[1.1] transition-all ease-in-out'/>
                                <FaTelegramPlane className='hover:scale-[1.1] transition-all ease-in-out'/>
                            </div>
                        </div>
                    </div>

                    <p className='text-center md:text-xs text-[10px] mt-10 min-w-[20rem]'>Copyright © 2023 Alucard, All rights reserved.</p>
                </div>
            </footer>
        </>

    )
}

export default App