'use client'

import { Button } from "@/components/ui/Button";
import Photo from "@/containers/page/Photo";
import Socials from "@/containers/page/Socials";
import State from "@/containers/page/State";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Веб разработчик',
    description: 'Разработка сайтов от верстки до хостинга. Реализую любые идеи: от визиток до интернет-магазинов',
    href: ''
  },
  {
    num: '02',
    title: 'UI/UX Дизайнер',
    description: 'Создаю удобные и красивые интерфейсы, делая ваш продукт привлекательным и понятным',
    href: ''
  },
  {
    num: '03',
    title: 'Android Разработчик',
    description: 'Разрабатываю приложения для Android, от простых до сложных, реализуя ваши идеи с пользой',
    href: ''
  },
  {
    num: '04',
    title: 'SEO Инженер',
    description: 'Повышаю ваш рейтинг в поисковиках, оптимизируя сайт для привлечения клиентов',
    href: ''
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-36">
      <section className='h-full'>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Разработчик, дизайнер</span>
              <h1 className="h1 mb-6">
                Приветствую, я <br /><span className="text-primary">Даня “Rodoro”</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white text-xl">
                Создаю элегантный и красивый цифровой дизайн,
                Владею различными языками программирования и цифровыми технологиями
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link href='/contact'>
                  <Button>Найти меня</Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-11 h-11 border-[3px] border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary-foreground hover:border-primary-foreground hover:text-background hover:transition-all duration-500" />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <State />
      </section>
      <section className='h-full'>
        <div className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
              {services.map((service, index) => {
                return (
                  <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                    <div className='w-full flex justify-between items-center'>
                      <div className='text-5xl font-bungee text-outline text-background group-hover:text-outline-hover transition-all duration-500'>
                        {service.num}
                      </div>
                      <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-primary transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                        <BsArrowDownRight className='text-background text-3xl' />
                      </Link>
                    </div>
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500'>
                      {service.title}
                    </h2>
                    <p className='text-white opacity-60 md:text-[20px]'>
                      {service.description}
                    </p>
                    <div className='border-b border-white/20 w-full' />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
