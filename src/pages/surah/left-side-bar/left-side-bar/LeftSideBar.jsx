/* eslint-disable react/prop-types */
import { SelectFont } from "../select-font/SelectFont";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ arabicFont, setArabicFont }) => {

    return (
        <div className="">
            <SuraInfo></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
        </div>
    );
};

export default LeftSideBar;