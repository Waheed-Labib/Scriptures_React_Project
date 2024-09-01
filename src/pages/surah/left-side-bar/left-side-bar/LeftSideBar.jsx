/* eslint-disable react/prop-types */
import { SelectFont } from "../select-font/SelectFont";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ surahId }) => {

    return (
        <div className="">
            <SuraInfo surahId={surahId}></SuraInfo>
            <SelectFont></SelectFont>
        </div>
    );
};

export default LeftSideBar;