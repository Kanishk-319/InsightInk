import Link from "next/link"
import { menuItems } from "@Helpers/MenuItems"
import { IMenu } from "@Helpers/Interfaces"
import { useState } from "react"

const Nav2 = () => {
    const [showActive, setShowActive] = useState<string>('For you')
    const handleClick = (name: string): void => {
        setShowActive(name)
    }
    return (
        <nav className="feedMenu no-scrollbar">
            {menuItems.map((item: IMenu, index: number) => {
                return (
                    <Link
                        className='menuItems'
                        id={item.name == showActive ? 'feedActive' : null}
                        key={index}
                        onClick={() => handleClick(item.name)}
                        href={item.destination}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav2