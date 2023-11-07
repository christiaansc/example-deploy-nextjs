'use client'
import React, { useEffect } from 'react'
import ImageGallery from './ImageGallery'

const Gallery = () => {
    useEffect(() => {
        const init = async () => {
            const { Animate, initTE } = await import("tw-elements");
            initTE({ Animate });
        };
        init();
    }, []);
    return (
        <section >
            <div
                className="flex justify-center p-10 ">
                <h1 className="flex  flex-wrap animate-typing overflow-hidden text-5xl text-green-900 text-center ">Descubre nuestras<span className="text-green-700 inline-block pl-2">plantas de interior</span></h1>
            </div>
            <div className="flex flex-wrap justify-center items-center pb-10">
                <ImageGallery />
            </div>
        </section>
    )
}

export default Gallery