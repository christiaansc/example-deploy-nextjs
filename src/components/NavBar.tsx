'use client'
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { NAVIGATION } from '@/constants'

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
            className="sticky  top-0 left-0   z-10 bg-white  w-full shadow-xl opacity-90 mx-auto">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src='/images/logo-raices-nav.png' height={180} width={180} alt='Logo-Raices' className='pl-5' priority />
                </Link>
                <div className="block lg:hidden sm:items-end pr-3">
                    {
                        !menuopen ? (
                            <button onClick={handleNav} className='flex items-center justify-center px-3 py-3  rounded-md border text-green-800 hover:text-green-600 '>
                                <AiOutlineMenu className="h-5 w-5" />
                            </button>
                        ) :
                            (
                                <button onClick={handleNav} className='flex items-center justify-center px-3 py-3  rounded-md border text-green-800 hover:text-green-600 '>
                                    <AiOutlineClose className="h-5 w-5" />
                                </button>
                            )
                    }
                </div>
                <div className="hidden lg:block md:w-auto pr-10">
                    <ul className="flex  md:flex-row md:space-x-10  justify-between">
                        {
                            NAVIGATION.map((item, idx) => (
                                <div key={item.title} className='group'>
                                    <NavLink href={item.path} title={item.title} icon={item.icon} /> 
                                    <div className='w-full left-0 pt-2 absolute   group-hover:block hover:block hidden '>
                                        <div className='bg-white shadow-lg'>
                                            {
                                                item.submenu && (
                                                    <div className='bg-white justify-center items-start'>
                                                        <div className='flex justify-center '>
                                                            {item.subMenuItems.map((itemSub) => (
                                                                <div key={itemSub.nombre} className='p-5'>
                                                                    <h1 className='text-lg font-semibold text-green-900'>{itemSub.nombre}</h1>
                                                                    {
                                                                        itemSub.subItem.map((subitem, idx) => (
                                                                            <li key={idx} className=''>
                                                                                <NavLink href={subitem.path} title={subitem.title} />
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </ul>
                </div>
            </div>
            {menuopen ? <MenuOverlay/> : null}
        </nav>
    )
}

export default NavBar
