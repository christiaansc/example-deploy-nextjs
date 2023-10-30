import Link from 'next/link'
import React from 'react'

const NavLink = ({href , title}:any) => {
  return (
    <Link href={href} className="text-green-950 hover:text-green-600  text-1xl px-10 py-2 pl-3 pr-4 sm:text-xl rounded
    uppercase " >{title} </Link>
  )
}

export default NavLink