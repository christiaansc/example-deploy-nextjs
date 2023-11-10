'use client'
import React, { useEffect } from 'react'
import ImageGallery from './ImageGallery'

const Gallery = () => {
    return (
        <section >
            <div
                className="flex justify-center p-20">
                <h1 className="text-5xl text-green-900 text-center">Descubre nuestras plantas de colección</h1>
            </div>
            {/* <div className="flex flex-wrap justify-center items-center pb-10">
                <ImageGallery />
            </div> */}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center mb-20'>
                <ImageGallery />
            </div>
        </section>
    )
}

export default Gallery