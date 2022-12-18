import { useState,useEffect,useRef } from "react"

function useTimer(){

    let [time,setTime]=useState(0)
    // const [hour,setHour]=useState()
    const timeRef=useRef(null)
   
    useEffect(()=>{
        if(time>60){
            setTime(0)
        }

    },[time])

   
    // useEffect(() => {
    //     if(timeRef.current !== null) return;
    //     timeRef.current=setInterval(()=>{
    //         setTime((prev)=>(prev+1))
            

    //     },delay)


    //     return () => {
            
          
    //     };
    //   }, [delay])

        const startTimer=(delay)=>{
        if(timeRef.current !== null) return;
        timeRef.current=setInterval(()=>{
            setTime((prev)=>(prev+1))
            

        },delay)
        

      }
      const resetTimer=()=>{
        stopTimer()
        setTime(0)
      }
      const stopTimer=()=>{
        clearInterval(timeRef.current)
        timeRef.current=null


      }
      return {time,startTimer,resetTimer,stopTimer}
      
      



    



}

export  default useTimer