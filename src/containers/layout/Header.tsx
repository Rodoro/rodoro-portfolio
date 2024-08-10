'use client'
import Link from "next/link"
import Image from 'next/image'
import Navbar from "./Navbar"
import { Button } from "@/components/ui/Button"
import MobileNav from "./MobileNav"
import { useEffect, useLayoutEffect, useState } from "react"

const Header = () => {

    return (
        <header className="py-8 xl:px-12">
            <div className="container mx-auto flex items-center justify-between">
                <Link href='/'>
                    <Image src={"/assets/img/logo-text.png"} alt={"logo"} width={145} height={64} priority quality={100} className='w-[100px] md:w-[145px] object-contain' />
                </Link>

                {/* TODO: Якоря и переход между ними */}

                <div className='hidden xl:flex items-center gap-8'>
                    <Navbar />
                    <Link href='/contact'>
                        <Button>Найти меня</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}

export default Header
