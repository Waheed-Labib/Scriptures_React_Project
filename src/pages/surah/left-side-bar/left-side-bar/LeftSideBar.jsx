/* eslint-disable react/prop-types */
import { SelectFont } from "../select-font/SelectFont";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = () => {

    return (
        <div className="">
            <SuraInfo></SuraInfo>
            <SelectFont></SelectFont>
        </div>
    );
};

export default LeftSideBar;