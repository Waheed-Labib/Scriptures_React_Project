/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useState } from "react";
import { server } from "../../../../../constants";
import { AuthContext } from "../../../../../contexts/authProvider";

const TranslationInputBox = ({ verse_key }) => {

    const { loggedInUser } = useContext(AuthContext);

    const [translation, setTranslation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${server}/translations/add-translation`, {
            translatorId: loggedInUser._id,
            translatorName: loggedInUser.fullName,
            verse_key,
            content: translation
        }, {
            withCredentials: true
        })
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevents new line
            handleSubmit(e);
        }
    };

    return (
        <div>
            <form className="flex flex-col gap-1">
                <textarea
                    onChange={(e) => setTranslation(e.target.value)}
                    placeholder="Add Your Translation"
                    onKeyDown={handleKeyDown}
                    className="w-full h-10 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4 pt-2">
                </textarea>

            </form>

        </div>
    );
};

export default TranslationInputBox;