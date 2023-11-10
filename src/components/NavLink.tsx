import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({ href, title }: any) => {
  const pathname = usePathname()

  return (
    <>
      <Link href={href} className={`text-green-950  ${href === pathname ? 'text-green-600': ''} hover:text-green-600 text-1xl px-6 py-2 pl-3 pr-4 sm:text-xl rounded`}>{title} </Link>
    </>
  )
}

export default NavLink