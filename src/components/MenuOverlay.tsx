import { Key } from "react"
import NavLink from "./NavLink"

const MenuOverlay = ({ links }: any) => {
    return (
        <ul className="lg:hidden flex flex-col py-4 items-center">
            {links.map((link: { path: any; title: any }, index: Key | null | undefined) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay