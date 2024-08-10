import Link from "next/link"
import { FaGithub, FaDiscord } from "react-icons/fa"
import { BiLogoTelegram } from "react-icons/bi";

const socials = [
    { icon: <FaGithub style={{fontSize: '24px'}}/>, path: 'https://github.com/Rodoro' },
    { icon: <FaDiscord style={{fontSize: '24px'}}/>, path: 'https://discordapp.com/users/595314590812864513' },
    { icon: <BiLogoTelegram style={{fontSize: '24px'}}/>, path: 'https://t.me/danya213411' },
]

const Socials = ({ containerStyles, iconStyles }: { containerStyles?: string, iconStyles?: string }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} className={iconStyles} key={index}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
