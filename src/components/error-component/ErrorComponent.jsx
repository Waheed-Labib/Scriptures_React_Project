// eslint-disable-next-line react/prop-types
const ErrorComponent = ({ errorType, errorText }) => {
    return (
        <div className="flex flex-col items-center my-8">
            <div className="p-2 w-12 h-12 rounded-full flex justify-center items-center bg-rose-300 border-2 border-gray-200">
                <h1 className="text-4xl font-bold text-gray-200">!</h1>
            </div>
            <h3 className='mt-8 text-2xl font-semibold text-slate-500'>{errorType}</h3>
            <p className='mt-4 text-xs text-slate-700'>{errorText}</p>
        </div>
    );
};

export default ErrorComponent;