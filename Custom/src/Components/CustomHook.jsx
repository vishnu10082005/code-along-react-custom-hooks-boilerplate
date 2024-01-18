import React from 'react'
import { useState } from 'react'
const useStorage=(e,value)=>{
    const StoredValue=JSON.parse(localStorage.getItem(e)) || value
    const setValueInput=(updatedValue)=>{
localStorage.setItem(e,JSON.stringify(updatedValue))
sessionStorage.setItem(e,JSON.stringify(updatedValue))   


}
return[StoredValue,setValueInput]



}

const CustomHook = () => {
    const [Value,setInputValue]=useStorage("inputValue","")
    const inputReader=(e)=>{
setInputValue(e.target.value)
    }
  return (
    <div>
      
      <input type="text" onChange={(e)=>{
inputReader(e)
      }}/>
      <p>{Value}</p>
    </div>
  )
}

export default CustomHook
