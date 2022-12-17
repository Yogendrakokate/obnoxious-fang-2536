

import { useState, useEffect } from "react";
import useTimer from "./UseTimer";
import { Button, Input, Text } from "@chakra-ui/react";



function Timer() {
  // const showText = useTimeout(2000);
  // const time=useTimer()
  const { time, startTimer, resetTimer, stopTimer } = useTimer();
  
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
//   const [stopminute, setstopminute] = useState(0);
  
  
  // const startTimer=useTimer()
  useEffect(() => {
    if (time > 60) {
      setMinute((prev) => prev + 1);
    }
  }, [time]);
  useEffect(() => {
    if (minute >= 60) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
  }, [minute]);

 

  return (
    <div className="Timer">
      {/* {showText && <h1>Timer compoenent</h1>}
      <Timeout />
      <button></button> */}
      <div>
       
        <Text fontWeight="semibold" fontSize="30px">
          {hour} : {minute} : {time} 
        </Text>
        <label>Description</label>
        <Input placeholder="Describe the activity"/>
        <label>Project</label>
        <Input placeholder="Add or select project name"/>
        <label>Task</label>
        <Input placeholder="Add or select Task name" mb="20px"/>
        <Button onClick={() => startTimer(1000)} mr="10px" >start</Button>
        <Button onClick={stopTimer} mr="10px" >stop</Button>
        <Button onClick={resetTimer} mr="10px" >reset</Button>
      </div>
     
     
    </div>
  );
}

export default Timer;