'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import Image from 'next/image'
import { useEffect } from "react";


const items = [
    { name: "Главная", link: '#main' },
    { name: "Услуги", link: '#services' },
    { name: "Резьме", link: '#resume' },
    { name: "Работы", link: '#works' },
    { name: "Отзовы", link: '#reviews' },
];

const MobileNav = () => {
    let pathname = "";

    useEffect(() => {
      pathname = window.location.href;
    }, []);
    const [basePath, anchor] = pathname.split('#');

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center">
                <Link className="mt-32 mb-32" href='/'>
                    <Image src={"/assets/img/logo-text.png"} alt={"logo"} width={100} height={40} priority quality={100} className='object-contain' />
                </Link>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {items.map((link, index) => {
                        return (
                            <Link href={link.link} key={index} className={`${(link.link === `#${anchor}` || (anchor == null && index==0)) && 'text-primary border-b-2 border-primary'} font-anonymous text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
