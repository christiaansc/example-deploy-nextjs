import CardServices from "./CardServices"

const Servicios = () => {
    return (
        <section >

            <div className=" bg-auto bg-no-repeat bg-center bg-fixed  mx-auto md:px-6 bg-green-800 p-10 bg-banner-title mb-10">
         
                <section className="mb-32 text-center">
                    <div className="grid lg:grid-cols-3 lg:gap-x-12 transition duration-300 delay-150 hover:delay-300">
                        <CardServices />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Servicios