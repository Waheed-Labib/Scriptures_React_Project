/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import TranslationSearchInput from '../translation-search/TranslationSearchInput';
import { useState } from 'react';
import TranslationsDropdownButtonText from '../translations-dropdown-button/TranslationsDropdownButtonText';
import TranslationsList from '../translations-list/TranslationsList';
import TranslationSearchOutput from '../translation-search/TranslationSearchOutput';

export const TranslationDropdownMenu = ({ inline }) => {

    const [searchText, setSearchText] = useState('');

    return (
        <Dropdown className="flex items-center">
            <DropdownAction asChild>
                <Button className={`text-xs text-cyan-700 justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8 ${inline && 'w-32 mb-2 bg-slate-200 hover:bg-slate-300'}`}>
                    <TranslationsDropdownButtonText></TranslationsDropdownButtonText>
                </Button>
            </DropdownAction>
            <DropdownContent className='h-96 border border-gray-500 shadow-xl'>
                <DropdownList>
                    <DropdownItem className="p-0 mb-2">
                        <TranslationSearchInput
                            searchText={searchText}
                            setSearchText={setSearchText}>
                        </TranslationSearchInput>
                    </DropdownItem>
                    {
                        searchText ?
                            <TranslationSearchOutput
                                searchText={searchText}
                                setSearchText={setSearchText}
                            ></TranslationSearchOutput>
                            :
                            <TranslationsList></TranslationsList>
                    }
                </DropdownList>
            </DropdownContent>
        </Dropdown >
    )
}
