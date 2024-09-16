/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import { FaBars } from "react-icons/fa";
import { useLanguages } from '../../../../hooks/useLanguages';
import Language from './Language';
import SimpleSkeleton from '../../../../components/simple-skeleton/SimpleSkeleton';
import ErrorComponent from '../../../../components/error-component/ErrorComponent';
import { useSelectedTranslationsIds } from '../../../../hooks/useSelectedTranslationsIds';

export const TranslationDropdown = () => {

    const { languages, loading: languagesLoading, error: languagesError } = useLanguages();

    const { selectedTranslationsIds } = useSelectedTranslationsIds();

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button className='text-xs text-cyan-700 justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <p className=''>{selectedTranslationsIds?.length} selected</p>
                    <div className=''>
                        <FaBars></FaBars>
                    </div>
                </Button>
            </DropdownAction>
            <DropdownContent className='border'>
                <DropdownList>
                    <DropdownItem className="p-0 mb-2">
                        <input placeholder="Search" className="w-full h-8 rounded ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 pl-4"></input>
                    </DropdownItem>
                    <div className='h-72 overflow-y-scroll'>
                        {
                            languagesLoading &&

                            <div className="flex flex-col gap-2">
                                {
                                    Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                                }
                            </div>

                        }
                        {
                            languages?.map((language, index) => <Language
                                key={index}
                                language={language}
                            ></Language>)
                        }
                        {
                            languagesError && <ErrorComponent errorType='Translations List Fetching Failed' errorText={languagesError}></ErrorComponent>
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown >
    )
}
