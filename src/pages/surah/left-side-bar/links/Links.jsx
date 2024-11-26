/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Links = ({ chapterNum }) => {

    const navigate = useNavigate()

    const handlePrevClick = () => {
        navigate(`/surah/${chapterNum - 1}/page/1`)
    }

    const handleNextClick = () => {
        navigate(`/surah/${chapterNum + 1}/page/1`)
    }

    return (
        <div className="flex items-center justify-between w-full">
            {
                chapterNum !== 1 && <div onClick={handlePrevClick} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 cursor-pointer">
                    <FaAngleLeft></FaAngleLeft>
                    <p>prev</p>
                </div>
            }

            {
                chapterNum !== 114 && <div onClick={handleNextClick} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 cursor-pointer">
                    <p>next</p>
                    <FaAngleRight></FaAngleRight>
                </div>
            }

        </div>
    );
};

export default Links;