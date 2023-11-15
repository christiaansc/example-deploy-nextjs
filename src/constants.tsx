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
                nombre: 'Plantas',
                subItem: [
                    { title: 'Plantas de interior', path: '/plantas' },
                    { title: 'Plantas de coleccion', path: '/plantas' },
                ]
            },
            {
                nombre: 'Accesorios',
                subItem: [
                    { title: 'Insumos', path: '/insumos' },
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
                    { title: 'Asesoria Gratis', path: '/plantas' },
                    { title: 'Asesoria Online', path: '/plantas' },
                    { title: 'Asesoria Presencial', path: '/plantas' },
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