'use client'

import { useState } from "react"
import CountUp from "react-countup"

const stats = [
    {
        num: 2,
        text: "Года опыта работы"
    },
    {
        num: 11,
        text: "Выполненных проектов"
    },
    {
        num: 8,
        text: "Освоенных технологий"
    },
    {
        num: 500,
        text: "Коммитов с кодом"
    },
]

const State = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={4}
                                    delay={2}
                                    suffix={index==3 ? '+' : ''}
                                    className="text-4xl xl:text-6xl font-extrabold text-primary"
                                />
                                <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-[20px] text-white`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default State
