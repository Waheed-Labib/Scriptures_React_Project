/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import TranslationSearchInput from '../translation-search/TranslationSearchInput';
import { useState } from 'react';
import TranslationsDropdownButtonText from '../translations-dropdown-button/TranslationsDropdownButtonText';
import TranslationsList from '../translations-list/TranslationsList';
import TranslationSearchOutput from '../translation-search/TranslationSearchOutput';

export const TranslationDropdownMenu = () => {

    const { searchText, setSearchText } = useState('');

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button className='text-xs text-cyan-700 justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <TranslationsDropdownButtonText></TranslationsDropdownButtonText>
                </Button>
            </DropdownAction>
            <DropdownContent className='border'>
                <DropdownList>
                    <DropdownItem className="p-0 mb-2">
                        <TranslationSearchInput setSearchText={setSearchText}></TranslationSearchInput>
                    </DropdownItem>
                    {
                        searchText ?
                            <TranslationSearchOutput searchText={searchText}></TranslationSearchOutput>
                            :
                            <TranslationsList></TranslationsList>
                    }
                </DropdownList>
            </DropdownContent>
        </Dropdown >
    )
}
