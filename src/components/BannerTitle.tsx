import Link from "next/link"

const BannerTitle = ({ titulo, descripcion }: any) => {
    return (
        <>
            <section className='bg-cream  md:px-6 py-20 '>
                <h1 className='text-green-900 text-6xl  w-auto text-center px-5'>{titulo}</h1>
                <div>
                    <p className="text-base text-center">
                        {descripcion}
                    </p>
                </div>
            </section>
            <ol className="list-reset flex justify-normal pt-5 pl-20">
                <li>
                    <Link href="/"
                        className="text-green-950 transition duration-150 ease-in-out hover:text-green-600 dark:active:text-green-950">Inicio</Link>
                </li>
                <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
                </li>
                <li className="text-neutral-500 dark:text-neutral-300 lowercase">{titulo}</li>
            </ol>
            <hr className="flex my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </>
    )
}

export default BannerTitle