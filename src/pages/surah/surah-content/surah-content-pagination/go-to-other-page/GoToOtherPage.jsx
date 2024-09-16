/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownList } from 'keep-react'
import { FaAngleDown } from "react-icons/fa";
import { useVersesInfo } from '../../../../../hooks/useVersesInfo';
import PagesDropdownItem from './PagesDropdownItem';

const GoToAnotherChapter = ({ page, setPage }) => {

    const { state } = useVersesInfo(page);
    const { versesInfo } = state;

    const perPage = versesInfo?.pagination?.per_page;
    const totalPages = versesInfo?.pagination?.total_pages;

    const firstVerseNumber = ((page - 1) * perPage) + 1;
    const lastVerseNumber = page * perPage;
    const currentVerses = `verse (${firstVerseNumber}-${lastVerseNumber})`

    return (
        <Dropdown trigger="hover">
            <DropdownAction asChild>
                <Button className='bg-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-600 gap-2 h-8 rounded'>
                    <p>{currentVerses}</p>
                    <FaAngleDown></FaAngleDown>
                </Button>
            </DropdownAction>
            <DropdownContent>
                <DropdownList>
                    <div className='h-64 overflow-y-scroll'>
                        {
                            Array.from({ length: totalPages }, (_, i) => i + 1).map((pageItem, index) => <PagesDropdownItem
                                key={index}
                                pageItem={pageItem}
                                perPage={perPage}
                                setPage={setPage}
                            ></PagesDropdownItem>)
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default GoToAnotherChapter