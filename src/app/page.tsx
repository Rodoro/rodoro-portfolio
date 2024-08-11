'use client'

import { Button } from "@/components/ui/Button";
import Photo from "@/containers/page/Photo";
import Socials from "@/containers/page/Socials";
import State from "@/containers/page/State";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FaCss3, FaJs, FaReact, FaHtml5, FaFigma, FaNodeJs, FaUnity, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiNestjs, SiAdobe, SiVisualstudiocode } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs";
import { ScrollArea } from "@/components/common/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/common/tooltip";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { FaGithub } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkSliderBtn from "@/components/common/slider/WorkSliderBtn";

const services = [
  {
    num: '01',
    title: 'Веб Разработчик',
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

const about = {
  title: "Мои данные",
  description: "Создаю элегантный и красивый цифровой дизайн, Владею различными языками программирования и цифровыми технологиями",
  info: [
    {
      fieldName: 'Имя',
      fieldVlaue: 'Даня'
    },
    {
      fieldName: 'Опыт',
      fieldVlaue: '2+ Года'
    },
    {
      fieldName: 'Email',
      fieldVlaue: 'daniil.213411@gmail.com'
    },
    {
      fieldName: 'Языки',
      fieldVlaue: 'Английский, Русский'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Мой опыт',
  description: "Несмотря на отсутствие профессионального опыта, я обладаю глубоким пониманием принципов разработки full-stack приложений",
  items: [
    {
      company: "Фриланс",
      position: "Full Stack Разработчик",
      duration: "Весна 2024 - Сейчас",
    },
    {
      company: "Оброзовательная организация",
      position: "Главный разработчик ПО",
      duration: "2023 - 2024",
    },
  ]
}

const skills = {
  title: 'Мои навыки',
  skillist: [
    {
      title: 'Web разработка',
      icons: [
        {
          icon: <FaHtml5 />,
          name: 'html 5',
        },
        {
          icon: <FaCss3 />,
          name: 'css 3',
        },
        {
          icon: <FaJs />,
          name: 'javascript',
        },
        {
          icon: <FaReact />,
          name: 'react.js',
        },
        {
          icon: <SiNextdotjs />,
          name: 'next.js',
        },
        {
          icon: <SiTailwindcss />,
          name: 'tailwind',
        },
        {
          icon: <FaNodeJs />,
          name: 'node.js',
        },
        {
          icon: <SiNestjs />,
          name: 'nest.js',
        },
      ]
    },
    {
      title: 'Дизайн',
      icons: [
        {
          icon: <FaFigma />,
          name: 'figma',
        },
        {
          icon: <SiAdobe />,
          name: 'adobe',
        },
      ]
    },
    {
      title: 'Программирование',
      icons: [
        {
          icon: <FaUnity />,
          name: 'unity',
        },
        {
          icon: <FaDocker />,
          name: 'docker',
        },
        {
          icon: <SiVisualstudiocode />,
          name: 'vscode',
        },
      ]
    }
  ]
}

const projects = [
  {
    num: "01",
    category: "Frontend проект",
    title: "project 1",
    description: "Создан адаптивный сайт, максимально оптимищированый под разные устройства. Добавленно множества уникальных анимаций",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Next" }],
    image: "/assets/img/work/thumb1.png",
    github: ''
  },
  {
    num: "02",
    category: "Frontend проект",
    title: "project 2",
    description: "Lorem",
    stack: [{ name: "TypeScript" }, { name: "React" }, { name: "Tailwind" }],
    image: "/assets/img/work/thumb1.png",
    live: '',
    github: ''
  }
]

export default function Home() {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <main className="flex flex-col gap-4 md:gap-36 mt-28">
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
      <section className='h-full'>
        <div className='h-full flex justify-center py-12 xl:py-0'>
          <div className='container mx-auto min-h-[618px]'>
            <Tabs defaultValue='skills' className='flex flex-col xl:flex-row gap-[60px]'>
              <div className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                <div className='flex flex-col gap-6 text-center xl:text-left'>
                  <h2>Обо <span className='text-primary'>мне</span></h2>
                  <p className='text-[20px] indent-8'>Я - многопрофильный специалист с опытом веб-разработки, UI/UX дизайна и Android-разработки.  Могу создавать как простые веб-сайты, так и сложные приложения, оптимизируя их для максимальной эффективности</p>
                </div>
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                  <TabsTrigger value={'skills'}>Навыки</TabsTrigger>
                  <TabsTrigger value={'experience'}>Опыт</TabsTrigger>
                  <TabsTrigger value={'about'}>Подробнее</TabsTrigger>
                </TabsList>
              </div>


              <div className='min-h-[70hv] w-full'>
                <TabsContent value={'skills'} className='w-full h-full  text-center  xl:text-left'>
                  <div className='flex flex-col gap-[30px]'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <ScrollArea className='h-[540px]'>
                      <ul className="">
                        {skills.skillist.map((skill, index) => {
                          return <li key={index} >
                            <h3 className="text-[24px] text-primary">{skill.title}</h3>
                            <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                              {skill.icons.map((icon, index) => {
                                return <li key={index} >
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger className="w-[85px] h-[85px] rounded-xl flex justify-center items-center group">
                                        <div className="text-5xl group-hover:text-primary transition-all duration-300">{icon.icon}</div>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="capitalize">{icon.name}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </li>
                              })}
                            </ul>
                          </li>
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value={'experience'} className='w-full h-full'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl fond-bold'>{experience.title}</h3>
                    <p className='max-w-[600px] text-[20px] text-white mx-auto xl:mx-0 indent-8'>{experience.description}</p>
                    <ScrollArea className='h-[400px]'>
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                          return <li key={index} className='h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1  bg-[#161616]'>
                            <span className='text-primary'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-primary'></span>
                              <p className='opacity-60'>{item.company}</p>
                            </div>
                          </li>
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value={'about'} className='w-full text-center xl:text-left'>
                  <div className="flex flex-col gap-[30px]">
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-[20px] text-white mx-auto xl:mx-0 indent-8'>{about.description}</p>
                    <ul className='grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                      {about.info.map((item, index) => {
                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white opacity-60">{item.fieldName}</span>
                          <span className='w-[6px] h-[6px] rounded-full bg-primary'></span>
                          <span className="text-xl">{item.fieldVlaue}</span>
                        </li>
                      })}</ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="h-full">
        <div className="h-full flex justify-center pb-12 xl:px-0">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[50%]">
                  <div className="text-8xl leading-none text-transparent text-outline font-bungee">
                    {project.num}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize">
                    {project.category}
                  </h2>
                  <p className="text-white opacity-60 text-[20px]">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => {
                      return <li key={index} className="text-xl text-primary">
                        {item.name}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    })}
                  </ul>
                  <div className="border dorder-white opacity-60"></div>
                  <div className="flex items-center gap-4">
                    {project.live != null &&
                      <Link href={project.live} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#242329] flex justify-center items-center group">
                              <TbArrowUpRight className="text-white text-3xl group-hover:text-primary" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Открыть</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    }
                    {project.github != null &&
                      <Link href={project.github} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#242329] flex justify-center items-center group">
                              <FaGithub className="text-white text-3xl group-hover:text-primary" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Репозиторий</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    }
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%] xl:h-[460px]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                >
                  {projects.map((project, index) => {
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt="project" />
                        </div>

                      </div>
                    </SwiperSlide>
                  })}
                  <WorkSliderBtn
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles='bg-primary hover:bg-primary-foreground xl:rounded-full text-background text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
