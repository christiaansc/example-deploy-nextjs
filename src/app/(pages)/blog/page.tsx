import BannerTitle from '@/components/BannerTitle'
import CardBlog from '@/components/CardBlog'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
    return (

        <section>
            <div>
                <BannerTitle titulo={'Blog'} />
            </div>

            <div className="container my-24 mx-auto md:px-6">
              <CardBlog/>
            </div>

        </section>
    )
}

export default Blog