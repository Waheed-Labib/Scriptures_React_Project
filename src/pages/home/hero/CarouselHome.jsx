'use client'
import autoPlay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselSlides,
} from 'keep-react'

export const CarouselHome = () => {

    const data = [
        "Translate Quran in Your Own Language",
        "Explore hundreds of translations and tafsirs"
    ]

    return (
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
            <CarouselSlides>
                {data.map((slide) => (
                    <CarouselItem key={slide}>
                        <div className="flex items-center justify-center h-48 border-y border-cyan-950 pl-4">
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
