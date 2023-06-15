export default function (initialState) {
    const token = localStorage.getItem('token');

    return {
        isUser: (token ? true : false)
    };
}