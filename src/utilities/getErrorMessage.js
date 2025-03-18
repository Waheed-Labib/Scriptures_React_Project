export const getErrorMsg = (error) => {
    const match = error.response.data.match(/<pre>Error: (.*?)<br>/);
    const errorMessage = match ? match[1] : "Unknown error";

    return errorMessage;
}