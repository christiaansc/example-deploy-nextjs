import NavLink from "./NavLink"
import { useState } from 'react'
import { NAVIGATION } from '@/constants'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"


const MenuOverlay = () => {

    const [heading, setheading] = useState("")
    const [subHeading, setSubHeading] = useState("")

    return (
        <ul className="lg:hidden flex flex-col py-5 items-start pl-10 pr-10 border-t">
            {
                NAVIGATION.map((elem) => (

                    <li key={elem.title} className="w-full">
                        <div className="flex justify-between">
                            <div className="flex text-1xl">
                                <NavLink href={elem.path} title={elem.title} />
                            </div>
                            {
                                elem.submenu && (
                                    <div className="flex">
                                        <span className="flex  items-center cursor-pointer px-3 border-l"
                                            onClick={() => { heading !== elem.title ? setheading(elem.title) : setheading(''); setSubHeading('') }}>
                                            {heading === elem.title ? <AiFillCaretUp /> : <AiFillCaretDown />
                                            }
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                        <div className={`${heading === elem.title ? 'md:hidden' : 'hidden'}`}>
                            <ul>
                                {
                                    elem.subMenuItems?.map(subElem => (
                                        <li key={subElem.nombre}>
                                            <div className="flex justify-between">
                                                <h1 className='text-sm font-mono font-light text-green-900'>{subElem.nombre}</h1>
                                                {
                                                    elem.submenu ?
                                                        <div className="flex">
                                                            <span className="flex  items-center cursor-pointer px-3"
                                                                onClick={() => subHeading !== subElem.nombre
                                                                    ? setSubHeading(subElem.nombre)
                                                                    : setSubHeading("")}>
                                                                {subHeading === subElem.nombre ? <AiFillCaretUp /> : <AiFillCaretDown />}
                                                            </span>
                                                        </div>
                                                        : ''
                                                }
                                            </div>
                                            <div className={`
                                            ${subHeading === subElem.nombre
                                                    ? 'md:hidden'
                                                    : 'hidden'}
                                            `}>
                                                <ul className="">
                                                    {
                                                        subElem.subItem.map(subList => (
                                                            <li key={subList.title} className="pl-3 text-sm">
                                                                <NavLink href={subList.path} title={subList.title} />
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </li>

                ))
            }
        </ul>
    )
}

export default MenuOverlay
