import { Button } from "@/components/ui/Button";
import Photo from "@/containers/page/Photo";
import Socials from "@/containers/page/Socials";
import State from "@/containers/page/State";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
