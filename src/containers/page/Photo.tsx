'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' }, }}>

                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill='transparent'
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#FEFEFE"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                    {/* <motion.circle
                        cx="253"
                        cy="253"
                        r="202.5"
                        fill="#D66146"
                    /> */}
                    
                </motion.svg>
                <div className='top-0 bottom-0 right-0 left-0 m-auto absolute h-[405px] w-[405px] rounded-full bg-[#D66146] shadow-[0_0_52px_12px_rgba(228,122,73,1)]' />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }, }}
                    className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute top-0 m-auto'
                >
                    <Image src="/assets/img/photo.png" priority quality={100} fill alt="" className='object-contain' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo
