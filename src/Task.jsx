import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import state from './store'

const Task=({image, des}) => {
    const snap = useSnapshot(state)
    const [completed, setCompleted] = useState(true)

    const handleCheckboxChange = () => {     
            
        setCompleted(!completed)
        
        if(completed)
            state.count++
        else
            state.count--
      };

  return (
    <div className='flex flex-row bg-[#282828] text-white p-2 py-4 '>
        <img src={image} className='w-8 h-8 bg-[#3d3d3d] p-2 rounded-lg '/>
        <h2 className='mx-4'>{des}</h2>
        <input type='checkbox' className='w-8 h-8 rounded-lg ml-auto bg-[#9e4cb8]' 
        onClick={()=>{handleCheckboxChange()}}
       // checked={completed}
        />  
    </div>
  )
}

export default Task