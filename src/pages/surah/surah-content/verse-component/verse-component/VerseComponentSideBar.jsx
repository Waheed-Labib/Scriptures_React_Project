/* eslint-disable react/prop-types */
const VerseComponentSideBar = ({ verse_key }) => {
    return (
        <div>
            <p className="text-xs font-medium text-cyan-800">{verse_key}</p>
        </div>
    );
};

export default VerseComponentSideBar;