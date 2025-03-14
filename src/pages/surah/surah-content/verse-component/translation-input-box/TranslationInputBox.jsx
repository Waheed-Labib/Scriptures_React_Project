const TranslationInputBox = () => {

    /*
    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])
    */

    return (
        <div>
            <textarea placeholder="Add Your Translation" className="w-full h-10 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4 pt-2"></textarea>
        </div>
    );
};

export default TranslationInputBox;