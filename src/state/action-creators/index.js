
export const depositmoney = (amount) => {
    let count = 0
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: amount
        })
        count++;
        console.log({count})
        console.log('deposit called')
    }
}

export const withdrawmoney = (amount) => {
    return (dispatch)=>{
        dispatch({
            type: 'remove',
            payload: amount
        })
    }
}