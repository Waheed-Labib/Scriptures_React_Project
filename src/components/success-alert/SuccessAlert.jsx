/* eslint-disable react/prop-types */
import { FaCheckCircle } from 'react-icons/fa'


export const SuccessAlert = ({ success, setSuccess }) => {
    return (
        <div className="w-72 mx-auto flex items-center justify-center">
            <div onClick={() => setSuccess('')} className={`fixed flex justify-center items-center z-[100] ${success ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${success ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                    <div className="space-y-3 flex flex-col justify-center items-center gap-2">
                        <div className='text-5xl text-green-600'>
                            <FaCheckCircle></FaCheckCircle>
                        </div>
                        <h6 className="font-semibold text-xl text-center text-slate-700 mb-1">{success}</h6>
                        <button onClick={() => setSuccess('')} className="text-white bg-green-600 px-4 py-2 text-sm rounded hover:bg-green-700">Great !</button>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SuccessAlert;