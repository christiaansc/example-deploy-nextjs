import Image from "next/image"

const images = [
    {
        path: "/images/plantas/cordatum.jpg"
    },
    {
        path: "/images/plantas/singonio.jpg"
    },
    {
        path: "/images/plantas/cordatum.jpg"
    },
    {
        path: "/images/plantas/maranta-leuconera.jpg"
    },
    {
        path: "/images/plantas/calathea-burle-max.jpg"
    },
    {
        path: "/images/plantas/cordatum.jpg"
    },

]

const ImageGallery = () => {
    return (
        <>
            {
                images.map((item, idx) => (
                    <figure key={idx} className="inline-block max-w-sm px-5 py-5">
                        <Image
                            width={1000}
                            height={1000}
                            src={item.path}
                            className="h-auto max-w-full rounded-lg align-middle leading-none shadow-lg "
                            alt="Image - Gallery" />
                    </figure>
                ))
            }


        </>
    )
}

export default ImageGallery