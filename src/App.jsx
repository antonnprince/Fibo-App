import './App.css'
import target from './assets/target.svg'
import heart from './assets/heart-beat.png'
import state from './store.jsx'
import { useSnapshot } from 'valtio'
import workout from './assets/workout.svg'
import fire from './assets/fire.svg'
import walk from './assets/footprint.svg'
import sleep from './assets/sleep.svg'
import water from './assets/water.svg'
import Task from './Task.jsx'
import Swipe from './Swipe.jsx'
import Graph from './Graph.jsx'

function App() {

const snap = useSnapshot(state)

const content = [
  {
    imgSrc: workout,
    task:'Workout for 20 mins'
  },
  
  {
    imgSrc: fire,
    task:'Read book for 15 mins'
  },
  
  {imgSrc: walk,
    task:'30 mins walk',
  }, 
  {
    imgSrc:sleep,
    task:'Sleep at 11 sharp'
  },
  {
    imgSrc:water,
    task:'Drink 3L Water'
  }
  ]

  return (
    <div className=' bg-[#212121] p-4  w-1/4 mx-auto rounded-xl px-4'>

        <div className='bg-[#1a7cd8] flex flex-row text-white w-auto  rounded-xl text-left p-2'>
            <img src={target} className='w-12 h-12  my-2' />
            <div className='flex flex-col space-y-1 mx-2'>
              <h1 className='text-sm'>Your Daily Goals Almost Done</h1>
              <p className='text-sm'>{snap.count} out of 5  completed</p>
              
              {/* Progress bar */}
                <div className="w-full bg-[#358cdd] rounded-full h-1 ">
                  <div className="bg-[#bed7ef] h-1 rounded-full ease-in delay-100" style={{width: `${(snap.count/5)*100}%`}}></div>
                </div> 

                <h3 className='text-right text-xs'>{(snap.count/5)*100}%</h3>
            </div>
        </div>

        <div className='flex flex-row justify-between'>
          <h1  className='text-white text-left my-4'>Today's Goal</h1>
          <img src={heart} className='w-8 h-8 my-4'/>
        </div>

        
        <div className='space-y-4'>
          {
            content.map((each)=>(
              <Task image={each.imgSrc} des={each.task} />
            ))
          }

          <Swipe/>

          <Graph/>
        </div>
    </div>
  )
}

export default App
