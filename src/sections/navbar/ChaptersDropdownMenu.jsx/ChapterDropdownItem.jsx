/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";
import SimpleSkeleton from "../../../components/simple-skeleton/SimpleSkeleton";
import { Link } from "react-router-dom";

const ChapterDropdownItem = ({ surah, loading, error }) => {

    if (error) return <p>!</p>
    if (loading) return <SimpleSkeleton></SimpleSkeleton>

    return (
        <DropdownItem>
            <Link to={`/surah/${surah.id}`} className="flex items-center gap-2">
                <p>{surah?.id}</p>
                <p>{surah?.name_simple}</p>
            </Link>
        </DropdownItem>
    );
};

export default ChapterDropdownItem;