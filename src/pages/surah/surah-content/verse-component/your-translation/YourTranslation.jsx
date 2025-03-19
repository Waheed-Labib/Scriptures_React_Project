/* eslint-disable no-unused-vars */
import axios from "axios";
import { server } from "../../../../../constants";
import { useContext, useEffect, useRef, useState } from "react";
import { MsgContext } from "../../../../../contexts/MsgProvider";
import { getErrorMsg } from "../../../../../utilities/getErrorMessage";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import { Presentation } from "phosphor-react";

/* eslint-disable react/prop-types */
const YourTranslation = ({ translation, setRefreshKey }) => {

    const { translatorId, translatorName, _id, verse_key, content } = translation;

    const [newContent, setNewContent] = useState(content);

    const { setSuccessMsg, setErrorMsg } = useContext(MsgContext);

    const [isEditing, setIsEditing] = useState(false);

    const textAreaRef = useRef();

    useEffect(() => {
        if (isEditing) {
            textAreaRef.current.focus();
        }
    }, [isEditing])

    const { loggedInUser } = useContext(AuthContext);

    const handleEdit = (e) => {
        e.preventDefault();

        axios.post(`${server}/translations/edit-translation`, {
            translatorId,
            translatorName,
            translationId: _id,
            verse_key,
            content: newContent
        }, {
            withCredentials: true
        })
            .then(response => {
                setSuccessMsg(response.data.message);
                setIsEditing(false);
                setRefreshKey(prev => prev + 1);
            })
            .catch(error => {
                const errorMessage = getErrorMsg(error);
                setErrorMsg(`Failed! ${errorMessage}`);
            })

    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevents new line
            handleEdit(e);
        }
    };

    const handleDelete = () => {
        axios.post(`${server}/translations/delete-translation`, {
            translatorId,
            translationId: _id
        }, {
            withCredentials: true
        })
            .then(response => {
                setSuccessMsg(response.data.message);
                setRefreshKey(prev => prev + 1);
            })
            .catch(error => {
                const errorMessage = getErrorMsg(error)
                setErrorMsg(`Failed! ${errorMessage}`)
            })
    }

    return (
        <div>
            <textarea
                ref={textAreaRef}
                defaultValue={content}
                disabled={!isEditing}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Add Your Translation"
                onKeyDown={handleKeyDown}
                className="w-full h-10 rounded ring-1 ring-inset ring-gray-700 placeholder:text-gray-600 text-gray-700 pl-2 pt-2">
            </textarea>

            <div className="w-full flex justify-between items-start">
                <p className="text-cyan-700 italic font-medium text-sm">Your Translation</p>
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsEditing(true)} className="rounded bg-gray-600 text-slate-50 hover:bg-gray-800 font-medium py-1 px-4">Edit</button>
                    <button onClick={handleDelete} className="border rounded border-red-800 font-medium hover:bg-red-800 hover:text-slate-50 py-1 px-2">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default YourTranslation;