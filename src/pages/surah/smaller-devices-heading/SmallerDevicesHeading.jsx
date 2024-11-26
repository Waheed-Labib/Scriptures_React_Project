/* eslint-disable react/prop-types */
import Links from "../left-side-bar/links/Links";
import SurahName from "../left-side-bar/sura-info/SurahName";

const SmallerDevicesHeading = ({ chapterNum }) => {
    return (
        <div>
            <SurahName textAlign='center'></SurahName>
            <Links
                chapterNum={chapterNum}
            ></Links>
        </div >
    );
};

export default SmallerDevicesHeading;