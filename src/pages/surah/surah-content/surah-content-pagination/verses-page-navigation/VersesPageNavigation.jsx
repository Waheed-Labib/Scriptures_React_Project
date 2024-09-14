import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const VersesPageNavigation = () => {
    return (
        <div className="flex items-center gap-2 text-slate-700">

            <div className="text-2xl hover:text-slate-800">
                <FaChevronCircleLeft></FaChevronCircleLeft>
            </div>

            <p>Page 1</p>

            <div className="text-2xl hover:text-slate-800">
                <FaChevronCircleRight></FaChevronCircleRight>
            </div>

        </div>
    );
};

export default VersesPageNavigation;