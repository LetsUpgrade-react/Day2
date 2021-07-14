import React,{useState} from 'react';
import './style.css';

const Main =()=>{
    let [score, setScore] = useState(0)
    let [result,setResult]= useState("")
    return (
        <div>
            <h1 style={{textAlign:'center',color:'white'}}>
            Lets Upgrade Counter Application Assingment
            </h1>
            <p style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>
                Welcome to React Js Development Program!.
            </p>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>Day 2 Assignment</h3>
            <div style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
            }}>
                <button ></button>
            <button  class="btn-grad" onClick={()=>(score <25)?setScore(score+1):setResult("your score exceed 25")}> Increment </button>
             <button class="btn-grad" onClick={()=>(score>0 && score<=25)? setScore(score-1) : setResult("")}> Decrement </button>
             <button class="btn-grad" onClick={()=>{setScore(0)}}> Reset </button>
            </div>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>The value of score is {score}</h3>
            <h3 style={{color:'white',fontFamily:'Lucida Console'}}>{result}</h3>
            
            

           
        </div>

    )
}
export default Main