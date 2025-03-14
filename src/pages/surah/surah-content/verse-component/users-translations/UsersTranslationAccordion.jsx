/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UsersTranslationAccordion({ translations }) {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const data = [
        { title: "Users' Translation Available" },
    ];
    return (
        <div className="mb-4">
            {data?.map((data, idx) => (
                <div key={idx}>
                    {/* header / Title */}
                    <div onClick={() => handleToggle(idx)} className={`px-4 py-2 ${idx === 0 && 'bg-slate-200 border-slate-600'} border-l-[2px] cursor-pointer`}>
                        <div className="flex items-center">
                            <span>
                                <svg className={`mr-4 fill-slate-600 shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                            </span>
                            <h4
                                className={`${idx === 0 && 'text-slate-600'} text-sm`}>
                                {data.title}
                            </h4>
                        </div>
                    </div>
                    {/* body / content  */}
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className={`p-8 border-l-[3px] text-sm ${idx === 0 && 'text-slate-600'}`}>
                                {
                                    translations.map(translation => <div
                                        key={translation._id}
                                        className="mb-4">
                                        <p className="text-sm">{translation.content}</p>
                                        <p className="text-xs">- {translation.translatorName}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </div >
    );
}