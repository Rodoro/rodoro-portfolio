'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
    { name: "Главная", link: '#main' },
    { name: "Услуги", link: '#services' },
    { name: "Резьме", link: '#resume' },
    { name: "Работы", link: '#works' },
    { name: "Отзовы", link: '#reviews' },
];

const Navbar = () => {

    // const [scrolling, setScrolling] = useState(false);
    const [anchor, setAnchor] = useState<string>()

    useEffect(() => {
        const pathname = window.location.href;
        const splitPath = pathname.split('#');
        console.log(splitPath)
        setAnchor(splitPath[1])
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrolling(true);
    //         } else {
    //             setScrolling(false);
    //         }

    //         window.addEventListener("scroll", handleScroll);

    //         return () => {
    //             window.removeEventListener('scroll', handleScroll)
    //         }
    //     }
    // }, [])

    return (
        <nav className="flex gap-8">
            {items.map((link, index) => {
                return (
                    <Link href={link.link} key={index} className={`${(link.link === `#${anchor}` || (anchor == null && index == 0)) && 'text-primary border-b-2 border-primary'} capitalize text-[20px] hover:text-primary transition-all font-anonymous`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar