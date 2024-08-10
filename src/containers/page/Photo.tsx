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
                    <g filter="url(#filter0_d_8_31)">
                        <circle cx="253" cy="253" r="202.5" fill="#D66146" />
                    </g>
                    <defs>
                        <filter id="filter0_d_8_31" x="0.400002" y="0.400002" width="566.2" height="566.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feGaussianBlur stdDeviation="33.3" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.894118 0 0 0 0 0.478431 0 0 0 0 0.286275 0 0 0 1 0" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_31" result="shape" />
                        </filter>
                    </defs>
                </motion.svg>
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
