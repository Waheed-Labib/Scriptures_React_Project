// eslint-disable-next-line react/prop-types
const ErrorComponent = ({ errorType, errorText }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="p-4 w-16 h-16 rounded-full flex justify-center items-center bg-rose-600 border-2 border-gray-400">
                <h1 className="text-4xl font-bold text-gray-300">!</h1>
            </div>
            <h3 className='mt-8 text-2xl font-semibold text-gray-400'>{errorType}</h3>
            <p className='mt-4 text-xs'>{errorText}</p>
        </div>
    );
};

export default ErrorComponent;