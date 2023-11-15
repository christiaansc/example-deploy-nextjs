import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";


export const NAVIGATION = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Tienda',
        path: '/tienda',
        submenu: true,
        icon: <AiFillCaretDown className='pt-1' />,
        subMenuItems: [
            {

                image: <Image src='/images/logo-raices-nav.png' height={180} width={180} alt='Logo-Raices' className='pl-5' priority />,
                nombre: 'Plantas',
                subItem: [
                    { title: 'Plantas de interior', path: '/tienda/plantas/interior' },
                    { title: 'Plantas de coleccion', path: '/tienda/plantas/coleccion' },
                ]
            },
            {
                image: <Image src='/images/logo-raices-nav.png' height={180} width={180} alt='Logo-Raices' className='pl-5' priority />,
                nombre: 'Insumos',
                subItem: [
                    { title: 'Tierras', path: '/tienda/Insumos/tierras' },
                    { title: 'Fertilizantes', path: '/tienda/Insumos/tierras' },
                    { title: 'Tutores', path: '/tienda/Insumos/tutores' },


                ]

            },
        ],
    },
    {
        title: 'Servicios',
        path: '/servicios',
        submenu: true,
        icon: <AiFillCaretDown className='pt-1' />,
        subMenuItems: [
            {
                nombre: 'Asesorias',
                subItem: [
                    { title: 'Asesoria Gratis', path: 'servicios/asesorias/gratis' },
                    { title: 'Asesoria Online', path: 'servicios/asesorias/online' },
                    { title: 'Asesoria Presencial', path: 'servicios/asesorias/presencial' },
                ]
            },
            {
                nombre: 'Mantencion',
                subItem: [
                    { title: 'Mantencion de Plantas', path: '/plantas' },
                ]

            },


        ],
    },



    {
        title: 'Blog',
        path: '/blog'
    },

]