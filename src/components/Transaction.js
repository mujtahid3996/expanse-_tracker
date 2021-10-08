import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export default function Transaction({transaction}) {
    const sign=transaction.amount >0 ? '+' : '-'
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div>
             <li className="minus">
             {transaction.text} 
             <span>{sign}{transaction.amount}</span><button onClick={() =>deleteTransaction(transaction.id)} className="delete-btn">x</button>
             </li> 
            
        </div>
    )
}
