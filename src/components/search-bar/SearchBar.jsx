import { Input, Label } from 'keep-react'
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ label, name, type }) => {
    return (
        <fieldset className="">
            <Label className='flex items-center gap-2 mb-2 text-md' htmlFor={name}>
                <div>
                    <FaSearch></FaSearch>
                </div>
                <p>{label}</p>
            </Label>
            <Input className='border-gray-400' id={name} placeholder={label} type={type} />
        </fieldset>
    )
}
