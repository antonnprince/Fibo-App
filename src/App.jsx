import './App.css'
import target from './assets/target.svg'
import heart from './assets/heart-beat.png'
function App() {


  return (
    <div className='m-8 bg-[#212121] p-4 w-1/4 mx-auto'>

        <div className='bg-[#1a7cd8] flex flex-row text-white w-auto  rounded-lg text-left p-2'>
            <img src={target} className='w-12 h-12  my-2' />
            <div className='flex flex-col space-y-1 mx-2'>
              <h1 className='text-sm'>Your Daily Goals Almost Done</h1>
              <p className='text-sm'>4 out of 5  completed</p>
              
                <div className="w-full bg-[#358cdd] rounded-full h-1 ">
                  <div className="bg-[#bed7ef] h-1 rounded-full" style={{width: "45%"}}></div>
                </div> 

                <h3 className='text-right text-xs'>80%</h3>
            </div>
        </div>

        <div className='flex flex-row justify-between'>
          <h1  className='text-white text-left my-4'>Today's Goal</h1>
          <img src={heart} className='w-8 h-8 my-4'/>
        </div>
    </div>
  )
}

export default App
