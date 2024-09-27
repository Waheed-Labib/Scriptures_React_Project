'use client'
import autoPlay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselSlides,
} from 'keep-react'
import { carouselData } from '../../../data/CarouselData'

export const HomePageCarousel = () => {

    return (
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
            <CarouselSlides className=''>
                {carouselData.map((slide) => (
                    <CarouselItem className='' key={slide}>
                        <div className="flex items-center justify-center h-48 w-full border-y border-cyan-950 pl-4">
                            <h1 className="text-4xl font-light text-cyan-950">{slide}</h1>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselSlides>
            <div className='flex justify-center'>
                <CarouselControl>
                    <CarouselIndicators />
                </CarouselControl>
            </div>
        </Carousel >
    )
}
