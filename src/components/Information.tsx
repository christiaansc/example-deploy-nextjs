import Image from "next/image"

const Information = () => {
    return (
        <section className=" px-10 py-10 ">
            
            <div
                className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]md:max-w-xl md:flex-row">
                <Image
                    className="rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                    src={'/images/monsteras.png'}
                    alt="Information-raices"
                    width={500}
                    height={500} 
                    priority
                    />
                <div className="flex flex-col justify-center p-6">
                    <h5
                        className="mb-2 text-5xl font-extrabold text-green-900">
                        Mosteras deliciosas
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Information