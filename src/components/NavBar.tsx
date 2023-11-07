'use client'
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'


const navigation = [
    { title: 'Inicio', path: '/', current: true },
    { title: 'servicios', path: '/servicios', current: false },
    { title: 'plantas', path: '/plantas', current: false },
    { title: 'insumos', path: '/insumos', current: false },
    { title: 'blog', path: '/blog', current: false },
]
export const NavBar = () => {

    useEffect(() => {
        const init = async () => {
            const { Sticky, initTE } = await import("tw-elements");
            initTE({ Sticky });
        };
        init();
    }, []);

    const [menuopen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuopen)
    }
    return (
        <nav
        className="sticky  top-0 left-0 right-0 z-10 bg-white  w-full shadow-xl opacity-90 mx-auto">
            <div className="flex items-center justify-between  px-4">
                <Link href="/">
                    <Image src='/images/logo-raices-nav.png' height={200} width={200}   alt='Logo-Raices'  className='pl-5' priority />
                </Link>
                <div className="block lg:hidden sm:items-end">
                    {
                        !menuopen ? (
                            <button  onClick={handleNav} className='flex items-center justify-center px-3 py-3  rounded-md border text-green-800 hover:text-green-600 '>
                                <AiOutlineMenu className="h-5 w-5" />
                            </button>
                        ) :
                            (
                                <button onClick={handleNav}  className='flex items-center justify-center px-3 py-3  rounded-md border text-green-800 hover:text-green-600 '>
                                    <AiOutlineClose className="h-5 w-5" />
                                </button>
                            )
                    }
                </div>
                <div className="hidden lg:block md:w-auto">
                    <ul className="flex  md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navigation.map((item, idx) => (
                                <li key={idx}>
                                    <NavLink href={item.path} title={item.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {menuopen ? <MenuOverlay links={navigation}/>: null}
        </nav>
    )
}

export default NavBar
