import { useEffect } from "react";
import state from "./store";
import { useSnapshot } from "valtio";
const Graph = () => {
 
const snap=useSnapshot(state)


function getTodayDay() {
    const today = new Date();
    const day = today.getDate(); // Get the day of the month (1-31)
    return day;
  }
  
const todayDay = getTodayDay();
    console.log(snap.count)

 
return (
    <div className='flex flex-row bg-[#282828] text-white rounded-xl justify-between pr-2'>
      
      <div className="flex flex-col h-[200px] space-y-[25px] px-2 justify-center text-xs" >
        <h2>100%</h2>
        <h2>80%</h2>
        <h2>60%</h2>
        <h2>40%</h2>
        <h2>20%</h2>
      </div>

        <div className="flex flex-col text-xs self-end" > 
        <div className="bg-[#1a7cd8] my-2 rounded-sm h-[184px] w-5 flex flex-col items-end"></div>
        <h2 className="">28/4</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[200px] w-5"></div>
        <h2 className="">30/4</h2>
        </div>
        
        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[196px] w-5"></div>
        <h2 className="">02/5</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[180px] w-5"></div>
        <h2 className="">05/5</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[168px] w-5"></div>
        <h2 className="">11/5</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[164px] w-5"></div>
        <h2 className="">15/5</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm  h-[160px] w-5"></div>
        <h2 className="">15/5</h2>
        </div>

        <div className="flex flex-col text-xs self-end"> 
        <div className="bg-[#1a7cd8] my-2 rounded-sm w-5" style={{height: `${snap.count *40}px`}}><p className="my-[-15px]">{snap.count*20}%</p> </div>
        <h2 className="">{todayDay}/5</h2>
        </div>
        
          
        

    </div>
  );
};

export default Graph;
