/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownList } from 'keep-react'
import { RiArrowDropDownLine } from "react-icons/ri";
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
                <Button className='justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <p className='text-xs text-cyan-700'>{selectedTranslationsIds?.length} selected</p>
                    <div className='text-3xl text-cyan-700'>
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
