import BannerTitle from "@/components/BannerTitle"
import Image from "next/image"
import leuconera from '/public/images/plantas/maranta-leuconera.jpg'
import Link from "next/link"

const Tienda = () => {
    return (
        <>
            <div>
                <BannerTitle titulo={'Tienda'} />
            </div>
            <section className="mb-10">
                <h2 className="mb-12  text-center text-3xl font-bold">Asesorías</h2>

                <div className="flex justify-center  flex-wrap">

                    <div className="mb-6 lg:mb-0 px-5 w-80 ">
                        <div className="relative block rounded-lg bg-white hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex">
                                <div
                                    className="relative mx-4 w-full overflow-hidden rounded-lg bg-fill bg-no-repeat hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <Image src={leuconera} className="w-full" height={500} width={300} alt="Asesoria - gratis" priority />
                                </div>
                            </div>
                            <div className="p-6 text-start">
                                <h5 className="mb-2 text-lg font-bold">Aseroría presencial</h5>
                                <h6 className="mb-2 -mt-3 text-md font-mono">Desde los $25.000</h6>

                                <h6 className="mb-4 font-medium text-green-900">
                                    <Link href={'/servicios/asesorias/presencial'} className="bg-green-950 text-white p-1 px-3 hover:bg-green-700">Cotizar</Link>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0 px-5 w-80">
                        <div
                            className="relative block rounded-lg bg-white hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex">
                                <div className="relative mx-4  w-full overflow-hidden rounded-lg bg-cover bg-no-repeat hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <Image src={leuconera} className="w-full" height={500} width={300} alt="Asesoria - gratis" priority />
                                </div>
                            </div>
                            <div className="p-6 text-start">
                                <h5 className="mb-2 text-lg font-bold">Aseroría online</h5>
                                <h6 className="mb-2 -mt-3 text-md font-extralight">$15.000</h6>

                                <h6 className="mb-4 font-medium text-green-900">
                                    <Link href={'/servicios/asesorias/online'} className="bg-green-950 text-white p-1 px-3 hover:bg-green-700">Cotizar</Link>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="mb-0 lg:mb-0 px-5 w-80">
                        <div
                            className="relative block rounded-lg bg-white hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex">
                                <div
                                    className="relative mx-4  w-full overflow-hidden rounded-lg bg-cover bg-no-repeat hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <Image src={leuconera} className="w-full" height={500} width={300} alt="Asesoria - gratis" priority />
                                </div>
                            </div>
                            <div className="p-6 text-start">
                                <h5 className="mb-2 text-lg font-bold">Aseroría gratis</h5>
                                <h6 className=" mb-2 -mt-3  text-md font-extralight">Gratis</h6>

                                <h6 className="mb-4 font-medium text-green-900">
                                    <Link href={'/servicios/asesorias'} className="bg-green-950 text-white p-1 px-3 hover:bg-green-700">Cotizar</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Tienda