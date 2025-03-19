/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { server } from "../../../../../constants";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import { getErrorMsg } from "../../../../../utilities/getErrorMessage";
import { MsgContext } from "../../../../../contexts/MsgProvider";
import LoginAlert from "../../../../../components/login-alert/LoginAlert";

const TranslationInputBox = ({ verse_key, setRefreshKey }) => {

    const { loggedInUser } = useContext(AuthContext);

    const [isFocused, setIsFocused] = useState(false);
    const [isLoginAlertOpen, setIsLoginAlertOpen] = useState(false);

    const textAreaRef = useRef(null);

    useEffect(() => {
        if (isFocused && !loggedInUser) {
            setIsLoginAlertOpen(true);
            setIsFocused(false);
        }
    }, [isFocused, loggedInUser])

    const [translation, setTranslation] = useState('');

    const { setSuccessMsg, setErrorMsg } = useContext(MsgContext);


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
            .then(response => {
                setSuccessMsg(response.data.message);
                e.target.value = "";
                setRefreshKey(prev => prev + 1);

            })
            .catch(error => {
                const errorMessage = getErrorMsg(error)
                setErrorMsg(`Failed! ${errorMessage}`)
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
                    ref={textAreaRef}
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => setTranslation(e.target.value)}
                    placeholder="Add Your Translation"
                    onKeyDown={handleKeyDown}
                    className="w-full h-10 rounded ring-1 ring-inset ring-gray-700 placeholder:text-gray-600 pl-4 pt-2">
                </textarea>

            </form>

            <LoginAlert
                isLoginAlertOpen={isLoginAlertOpen}
                setIsLoginAlertOpen={setIsLoginAlertOpen}
            ></LoginAlert>
        </div >
    );
};

export default TranslationInputBox;