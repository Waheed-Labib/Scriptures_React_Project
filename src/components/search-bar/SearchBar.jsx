/* eslint-disable react/prop-types */
'use client'
import { MagnifyingGlass } from 'phosphor-react'
import { InputIcon, Input } from 'keep-react'

export const SearchBar = ({ placeholder }) => {
    return (
        <fieldset className="relative">

            <Input placeholder={placeholder} className="ps-11 bg-gray-200" />
            <InputIcon>
                <MagnifyingGlass size={25} color="#78350f" />
            </InputIcon>

        </fieldset>
    )
}
