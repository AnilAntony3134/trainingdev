const reducer = (state=0, action) => {
    if (action.item === 'deposit')
    {
        return state + action.payload
    }
    else if (action.item === 'withdraw')
    {
        return state - action.payload
    }
    else {
        return state;
    }
}
export default reducer;