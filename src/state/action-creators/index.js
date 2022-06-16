export const depositmoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
        console.log('deposit called')
    }
}

export const withdrawmoney = (amount) => {
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
        console.log('Withdraw called')

    }
}