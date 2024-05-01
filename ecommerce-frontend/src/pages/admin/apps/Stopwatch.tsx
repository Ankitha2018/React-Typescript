import { useEffect, useState } from "react";
import AdminSidebar from "../../../components/adminComponents/adminSidebar";

const formatTime = (timeInSeconds:number) =>
{
    const hours = Math.floor( timeInSeconds / 3600 );
    const minutes=Math.floor( (timeInSeconds % 3600 )/60);
    const seconds = timeInSeconds % 3600;
    
    const hourToString=hours.toString().padStart(2,"0")
    const minuteToString=minutes.toString().padStart(2,"0")
    const secondToString=seconds.toString().padStart(2,"0")

    return `${hourToString}: ${minuteToString}: ${secondToString}`
}

const Stopwatch = () =>
{
    const [time,setTime]=useState<number>(0)
    const [IsRunning, setIsRunning] = useState<boolean>( false );

    useEffect(() => {
        let intervalID: number; 
        if(IsRunning)
        intervalID = setInterval( () =>
        {
            setTime((prev)=> prev + 1) ;
        },1000)
    
      return () => {
          clearInterval( intervalID );
      }
    }, [IsRunning])

    const resetHandler = () =>
    {
        setTime( 0 );
        setIsRunning(false);
    }


  return (
    <div className="admin-container">
      <AdminSidebar />
          <main className="dashboard-app-container">
              <h1>Stopwatch</h1>
              <section>
                  <div className="stopwatch">
                      <h2>{formatTime(time)}</h2>
                      <button onClick={()=> setIsRunning((prev) => !prev)}>{!IsRunning?"Start" : "Stop"}</button>
                      <button onClick={resetHandler}>Reset</button>
                  </div>
              </section>
          </main>
        </div>
  )
}

export default Stopwatch