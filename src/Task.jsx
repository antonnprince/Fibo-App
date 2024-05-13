import React, { useEffect, useState } from 'react'
import workout from './assets/workout.svg'
import { useSnapshot } from 'valtio'
import state from './store'

const Task1 = () => {
    const snap = useSnapshot(state)
    const [completed, setCompleted] = useState(false)

    const handleCheckboxChange = () => {     
            if(completed===false && snap.count===0)
                {
                    state.count+=1
                    setCompleted(true)
                    
                }                

            if(completed===true && snap.count===1)
                {
                    state.count-=1
                    setCompleted(false)
                }

            console.log(completed, snap.count)
      };
    

  return (
    <div className='flex flex-row bg-[#282828] text-white p-2 rounded-lg '>
        <img src={workout} className='w-8 h-8 bg-[#3d3d3d] p-2 rounded-lg '/>
        <h2 className='mx-4'>Workout for 20 minutes</h2>
        <input type='checkbox' className='w-8 h-8 rounded-lg ml-auto bg-[#9e4cb8]'
        onClick={()=>{handleCheckboxChange()}}
        checked={completed}
        />  
    </div>
  )
}

export default Task1