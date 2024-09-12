import { Button, Dropdown, DropdownAction, DropdownContent, DropdownList } from 'keep-react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLanguages } from '../../../../hooks/useLanguages';
import Language from './Language';

export const TranslationDropdown = () => {

    const { languages, loading: languagesLoading, error: languagesError } = useLanguages();

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button className='justify-between w-full bg-cyan-700 hover:bg-slate-700 rounded h-8'>
                    <p>3 selected</p>
                    <div className='text-3xl'>
                        <RiArrowDropDownLine></RiArrowDropDownLine>
                    </div>
                </Button>
            </DropdownAction>
            <DropdownContent className='border'>
                <DropdownList>
                    <div className='h-64 overflow-y-scroll'>
                        {
                            languages?.map((language, index) => <Language
                                key={index}
                                language={language}
                                languagesLoading={languagesLoading}
                                languagesError={languagesError}
                            ></Language>)
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}
