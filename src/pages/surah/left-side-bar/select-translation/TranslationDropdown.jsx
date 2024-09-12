/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownList } from 'keep-react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLanguages } from '../../../../hooks/useLanguages';
import Language from './Language';
import SimpleSkeleton from '../../../../components/simple-skeleton/SimpleSkeleton';
import ErrorComponent from '../../../../components/error-component/ErrorComponent';

export const TranslationDropdown = () => {

    const { languages, loading: languagesLoading, error: languagesError } = useLanguages();

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button className='justify-between w-full bg-cyan-700 hover:bg-slate-700 rounded h-8'>
                    <p className='text-xs text-cyan-100'>3 selected</p>
                    <div className='text-3xl text-cyan-100'>
                        <RiArrowDropDownLine></RiArrowDropDownLine>
                    </div>
                </Button>
            </DropdownAction>
            <DropdownContent className='border'>
                <DropdownList>
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
