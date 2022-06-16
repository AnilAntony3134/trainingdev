import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

const Body = () => {
    const dispatch = useDispatch();
    const {withdrawmoney,depositmoney} = bindActionCreators( actionCreators,dispatch)
    const amount = useSelector(state => state.amount)

  return (
    <div>
        <button onClick={()=>{depositmoney(100)}}>
            plus
        </button>
        <button onClick={()=>{console.log(amount)}}>
            see
        </button>
        {amount}
        <button onClick={()=>{withdrawmoney(100)}}>
            Minus 
        </button>
    </div>
  )
}

export default Body