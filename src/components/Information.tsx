import Image from "next/image"

const Information = () => {
    return (
        <section className=" px-10 py-10 ">

            <div
                className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]md:max-w-xl md:flex-row">
                <Image
                    className="rounded-t-lg object-fill md:h-auto md:!rounded-none md:!rounded-l-lg"
                    src={'/images/monsteras.png'}
                    alt="Information-raices"
                    width={700}
                    height={700}
                    priority
                />
                <div className="flex flex-col justify-center">
                    <h5
                        className="mb-2 text-5xl font-extrabold text-green-950 sm:pt-5">
                        Monsteras deliciosas
                    </h5>
                    <p className="mb-4 text-base text-green-900">
                        La Monstera deliciosa es conocida por sus grandes hojas verdes con perforaciones decorativas. Es apreciada por su aspecto tropical y su capacidad para crecer en interiores.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Information