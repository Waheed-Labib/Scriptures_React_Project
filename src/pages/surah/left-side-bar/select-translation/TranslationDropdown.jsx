'use client'
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'

export const TranslationDropdown = () => {
    return (
        <Dropdown trigger="hover">
            <DropdownAction asChild>
                <Button>Open Dropdown</Button>
            </DropdownAction>
            <DropdownContent>
                <DropdownList>
                    <DropdownItem>
                        Phone
                    </DropdownItem>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}
