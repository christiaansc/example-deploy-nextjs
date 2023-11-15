import CardServices from "./CardServices"

const Servicios = () => {
    return (
        <section >

            <div className="bg-auto bg-no-repeat bg-center bg-fixed  mx-auto md:px-6 bg-green-800 p-10 bg-banner-title mb-5">
                <section className="mb-15 text-center">
                    <div className="grid lg:grid-cols-3 lg:gap-x-12  opacity-75">
                        <CardServices />
                    </div>
                </section>
            </div>
            <div className="container my-10 mx-auto md:px-6">
                <section className="text-center justify-center">
                    <div className="flex justify-center mb-10">
                        <div className="max-w-[700px] text-center">
                            <h2 className="mb-6 text-center text-3xl font-bold text-green-900">
                                ¿Por que elegir plantas de raices?
                            </h2>

                        </div>
                    </div>

                    <div className="grid  md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-green-900 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Envios a todo chile</h5>
                            <p className="text-green-900 ">
                                Compra y recive directamente en tu hogar 
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-green-900 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Sustratos</h5>
                            <p className="text-green-900 ">
                                Todas nuestras plantas de coleccion estan en un sustrato especializado.
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-green-900 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Extremely fast</h5>
                            <p className="text-green-900 ">
                                Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-green-900 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Soporte</h5>
                            <p className="text-green-900 ">
                                Si compras una plantas en raices podras  contactarnos para resolver cualquier duda.
                                
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Servicios