export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    };
};
export const logIn = () => {
    return {
        type: 'SIGN_IN'
    };
};
export const logOut = () => {
    return {
        type: ''
    };
};