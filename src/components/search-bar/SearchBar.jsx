
import { Input, Label } from 'keep-react'

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ label, name, type }) => {
    return (
        <fieldset className="max-w-md space-y-1">
            <Label htmlFor={name}>{label}</Label>
            <Input className='border-gray-400' id={name} placeholder={label} type={type} />
        </fieldset>
    )
}
