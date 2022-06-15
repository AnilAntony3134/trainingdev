export const depositmoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawmoney = (amount) => {
    return (dispatch)=>{
        dispatch({
            item: 'withdraw',
            payload: amount
        })
    }
}