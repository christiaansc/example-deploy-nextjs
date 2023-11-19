

export const NAVIGATION = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Tienda',
        path: '/tienda',
        submenu: true,
        subMenuItems: [
            {

                nombre: 'Plantas',
                subItem: [
                    { title: 'Plantas de interior', path: '/tienda/plantas/interior' },
                    { title: 'Plantas de coleccion', path: '/tienda/plantas/coleccion' },
                ]
            },
            {
                nombre: 'Insumos',
                subItem: [
                    { title: 'Sustratos', path: '/tienda/Insumos/sustratos' },
                    { title: 'Fertilizantes', path: '/tienda/Insumos/fertilizantes' },
                    { title: 'Tutores', path: '/tienda/Insumos/tutores' },


                ]

            },
        ],
    },
    {
        title: 'Nuestra Colección',
        path: '/coleccion'
    },
    {
        title: 'Servicios',
        path: '/servicios',
        submenu: true,
        subMenuItems: [
            {
                nombre: 'Asesorias',
                subItem: [
                    { title: 'Asesoria Gratis', path: 'servicios/asesorias/' },
                    { title: 'Asesoria Online', path: 'servicios/asesorias/' },
                    { title: 'Asesoria Presencial', path: 'servicios/asesorias/' },
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