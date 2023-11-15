import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLink = ({ href, title , icon }: any) => {
  const pathname = usePathname()
  return (

    <Link href={href} className={`text-green-950  ${href === pathname ? 'text-green-600' : ''}  hover:text-green-600 justify-between`}>
      <div className='py-2 text-start ' >{title } <div  className='inline-block pl-3'><span>{icon}</span></div></div>
    </Link>

  )
}

export default NavLink