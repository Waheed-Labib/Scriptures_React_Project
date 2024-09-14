import { DropdownItem } from "keep-react";

/* eslint-disable react/prop-types */
const PagesDropdownItem = ({ pageItem, perPage, setPage }) => {

    const firstVerseNumber = ((pageItem - 1) * perPage) + 1;
    const lastVerseNumber = pageItem * perPage;

    const verses = `verse (${firstVerseNumber}-${lastVerseNumber})`

    return (
        <div onClick={() => setPage(pageItem)}>
            <DropdownItem>{verses}</DropdownItem>
        </div>
    );
};

export default PagesDropdownItem;