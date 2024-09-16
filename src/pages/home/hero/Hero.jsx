import { CarouselHome } from './CarouselHome';
import SearchBoxHero from './SearchBoxHero';
import SearchDirectives from './SearchDirectives';

const Hero = () => {
    return (
        <div className='my-8 mt-12 flex items-center h-[460px] bg-slate-200 rounded'>
            <div className='w-full h-full rounded-l flex flex-col items-center justify-between p-12'>
                <CarouselHome></CarouselHome>
                <div className='w-full'>
                    <div className='mb-2'>
                        <SearchBoxHero></SearchBoxHero>
                    </div>
                    <SearchDirectives></SearchDirectives>
                </div>
            </div>
        </div>
    );
};

export default Hero;