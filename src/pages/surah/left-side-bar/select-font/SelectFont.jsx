import { Label, Radio } from 'keep-react'

export const SelectFont = () => {
    return (
        <form className="flex flex-col gap-2">
            <legend className="mb-1 text-lg font-semibold text-gray-600">Quran Font</legend>
            <fieldset className="flex items-center gap-2">
                <Radio defaultChecked id="uthmani" name="font" />
                <Label htmlFor="uthmani">Uthmani</Label>
            </fieldset>
            <fieldset className="flex items-center gap-2">
                <Radio id="indopak" name="font" />
                <Label htmlFor="indopak">IndoPak</Label>
            </fieldset>
        </form>
    )
}
