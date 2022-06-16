const amountreducer = (state=0,action) => {
    if (action.type === 'deposit')
    {
        console.log('deposit reducer called')
             return state + action.payload
    }
    else if (action.type === 'withdraw')
    {
        console.log('withdraw reducer called')
            return state - action.payload
    }
    else {
        console.log('default reducer called')
        console.log(action)
            return state;
    }
}
export default amountreducer;