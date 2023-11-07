
const BannerTitle = ({titulo}:any) => {
    return (
        <section className='bg-banner-title  bg-no-repeat bg-center  bg-cover w-full h-[30vh] mx-auto md:px-6 bg-green-800 py-20'>
            <div className=''>
                <h1 className='text-white text-5xl text-center font-bold uppercase'>{titulo}</h1>
            </div>
        </section>
    )
}

export default BannerTitle