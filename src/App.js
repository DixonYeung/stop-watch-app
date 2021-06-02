import React, { useEffect } from  "react";
import "./App.css";

export default function App() {
  const [milisecond, setMilisecond] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [minute, setMinute] = React.useState(0);

  const status = React.useRef(false);
  const intervalStore = React.useRef(null);
  const milisecondRef = React.useRef(0);
  const secondRef = React.useRef(0);
  const minuteRef = React.useRef(0);

  const [buttonString, setButtonString] = React.useState(false);


  const handleClick = ()=> {
    status.current = !status.current;
    if(status.current) {
      setMilisecond(0);
      setSecond(0);
      setMinute(0);
      intervalStore.current = window.setInterval(() => {
        setMilisecond((ms) => {
          
          if(ms < 99){
            return ms + 1;
          }
          else{
            setSecond((s)=>{
              if(s < 59){
                return s+1;
              }
              else{
                setMinute((m)=>{
                  if(m < 59){
                    return m + 1;
                  }
                  else{
                    return 0;
                  }
                });
                return 0;
              }
            });
            return 0;
          }
        });
      }, 10);
    }
    else if(status.current==false){
        window.clearInterval(intervalStore.current);
    };
    setButtonString((prev)=>!prev);
  };








    // const handleClick =  ()=>{
    //   status.current = !status.current;
      
    //   let timeout = window.setTimeout(() => {
    //     setMilisecond((milisecond + 1));
    //     window.clearTimeout(timeout);
    //   }, 10);

    //   setButtonString((prev)=>!prev);
    // }

    // if(status.current){
    //   let timeout = window.setTimeout(() => {
    //     if(milisecond < 99){
    //       setMilisecond(milisecond + 1);
    //     }
    //     else{
    //       setMilisecond(0);
    //       if(second < 59){
    //         setSecond(second + 1);
    //       }
    //       else{
    //         setSecond(0);
    //         if(minute < 59){
    //           setMinute(minute + 1)
    //         }
    //         else{
    //           setMinute(0);
    //         }
    //       }
    //     }
    //     window.clearTimeout(timeout);
    //   }, 10);
    // }



    // const handleClick =  ()=>{
    //   status.current = !status.current;
    //   if(status.current){

    //     milisecondRef.current = 0;
    //     secondRef.current = 0;
    //     minuteRef.current = 0;
    //     setMilisecond(milisecondRef.current);
    //     setSecond(secondRef.current);
    //     setMinute(minuteRef.current);

    //     intervalStore.current = window.setInterval(() => {
    //       if(milisecondRef.current < 99){
    //         milisecondRef.current = milisecondRef.current + 1;
    //         setMilisecond(milisecondRef.current);
    //       }
    //       else{
    //         milisecondRef.current = 0;
    //         if(secondRef.current < 59){
    //           secondRef.current = secondRef.current + 1;
    //           setSecond(secondRef.current);
    //         }
    //         else{
    //           secondRef.current = 0;
    //           if(minuteRef.current < 59){
    //             minuteRef.current = minuteRef.current + 1;
    //             setMinute(minuteRef.current);
    //           }
    //           else{
    //             minuteRef.current = 0;
    //           }
    //         }
    //       }
    //     }, 10);
    //   }
    //   else{
    //     window.clearInterval(intervalStore.current);
    //   }
    //   setButtonString(!buttonString);
    // }

    
    




  const handleLap = ()=>{
    let app = document.querySelector(".App");
  }

  return(
    <div className="App">
      <div className="title">Stop Watch</div>
      <div className="timerSection"><span>{minute>9?minute:"0"+minute}</span>:<span>{second>9?second:"0"+second}</span>.<span>{milisecond>9?milisecond:"0"+milisecond}</span></div>
      <div className="buttonGroup"><button onClick={handleLap}>Lap</button><button className={buttonString==true ? "stop" : "start"} onClick={handleClick}>{buttonString==true ? "stop" : "start"}</button></div>
    </div>
  );
}

