import quran from '../../../assets/quran.png'
import { SearchBar } from '../../../components/search-bar/SearchBar';
import { CarouselHome } from './CarouselHome';
import SearchDirectives from './SearchDirectives';

const Hero = () => {
    return (
        <div className='flex items-center h-[460px]'>
            <img className='hidden md:block w-1/2 h-full rounded-r' src={quran} alt=""></img>
            <div className='w-full md:w-1/2 h-full bg-[#ba9a74] rounded-l flex flex-col items-center justify-between p-12'>
                <CarouselHome></CarouselHome>
                <div className='w-full'>
                    <div className='mb-2'>
                        <SearchBar placeholder='Search Quran'></SearchBar>
                    </div>

                    <SearchDirectives></SearchDirectives>
                </div>
            </div>
        </div>
    );
};

export default Hero;