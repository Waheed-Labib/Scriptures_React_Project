import { Link, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
export const LoginAlert = ({ isLoginAlertOpen, setIsLoginAlertOpen }) => {

    const location = useLocation();

    return (
        <div className="w-72 mx-auto flex items-center justify-center">
            <div onClick={() => setIsLoginAlertOpen(false)} className={`fixed flex justify-center items-center z-[100] ${isLoginAlertOpen ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${isLoginAlertOpen ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                    <div className="space-y-3 flex flex-col justify-center items-center gap-2">
                        <svg className={`${isLoginAlertOpen ? 'scale-100 rotate-0 duration-200' : 'scale-0 rotate-90'} delay-100`} width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#540101" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                        <h6 className="font-semibold text-xl text-center text-slate-700 mb-1">You must login first</h6>

                        <div>

                            <Link to='/login' state={{ from: location }}>
                                <button onClick={() => setIsLoginAlertOpen(false)} className="text-white bg-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-900 mr-2">Login</button>
                            </Link>

                            <Link to='/enroll' state={{ from: location }}>
                                <button onClick={() => setIsLoginAlertOpen(false)} className="text-white bg-cyan-800 px-4 py-2 text-sm rounded hover:bg-cyan-900">Enroll</button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginAlert;