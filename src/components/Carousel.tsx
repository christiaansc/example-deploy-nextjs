'use client'
import Image from 'next/image';
import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <section>
      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
        data-te-carousel-slide>
        <div
          className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active>
            <Image
              width={1500}
              height={700}
              src="/images/slider-logo.jpg"
              className="block w-full"
              alt="Main-slider"
              priority />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <Image
              width={1500}
              height={700}
              src="/images/image-slider2.jpg"
              className="block w-full"
              alt="Main-slider"
              priority />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <Image
              width={1500}
              height={700}
              src="/images/image-slider.jpg"
              className="block w-full"
              alt="Main-slider"
              priority />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Carousel
