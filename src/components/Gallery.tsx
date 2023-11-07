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
                className="flex justify-center p-10">
                <h1 className="animate-typing overflow-hidden lg:whitespace-nowrap  text-5xl text-green-900 text-center">Descubre todas nuestras <span className="text-green-700">plantas de interior</span></h1>
            </div>
            <div className="flex flex-wrap justify-center items-center pb-10">
                <ImageGallery />
            </div>
        </section>
    )
}

export default Gallery