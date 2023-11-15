import NavLink from "./NavLink"
import {  useState } from 'react'
import { NAVIGATION } from '@/constants'


const MenuOverlay = () => {



    const [heading, setHeading] = useState("")
    
    return (
        <ul className="lg:hidden flex flex-col py-5 items-start pl-10">
            {NAVIGATION.map((item) => (
                <div key={item.title} onClick={() => setHeading(item.title)} className="group">
                    <div >
                        <NavLink href={item.path} title={item.title} icon={item.icon} />
                    </div>

                    <div className={`${heading === item.title ? 'md:hidden':'hidden'}  group-hover:block hover:block hidden`}>
                        {
                            item.subMenuItems?.map((subItems) => (
                                <div key={subItems.nombre}>
                                    <div className="pl-3  text-green-950">
                                        <h1 className="font-semibold">{subItems.nombre}</h1>
                                        <div>
                                            {subItems.subItem.map((subItem , idx) => (
                                                <li key={idx} className="pl-3 ">
                                                    <NavLink href={subItem.path} title={subItem.title}/>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            ))}
        </ul>
    )
}

export default MenuOverlay