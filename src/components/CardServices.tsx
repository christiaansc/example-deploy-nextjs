import Image from "next/image"


const services = [
    {
        title: "Asesorias",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        title: "Marble queen",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        title: "Calathea Burle Max",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content",
    },

]
const CardServices = () => {
    return (
            <>
                {
                    services.map((item, idx) => (
                        <div key={idx} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-5">

                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {item.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                    ))
                }
            </>
        

    )
}

export default CardServices