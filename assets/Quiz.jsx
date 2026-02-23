import React ,{useState} from 'react';
import './Quiz.css';

function Quiz({questions}){
    const [index,setindex]=useState(0);
    const [classstate, setclass] = useState(null);
    const [lock,setlock]=useState(false);
    const idxinc=()=>{
        setindex(index+1);
        setclass(null);
        setlock(false)
    }
    const checkans=(op)=>{
        if(lock!=true){
           setclass(op);
            setlock(true);
        }
       
    };
     return (
        <div className='Container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{questions[index].question}</h2>
            <ul>
            <li onClick={(e)=>checkans(0)} className={classstate==0?questions[index].correctAnswer===0?"correct":"wrong":""}>{questions[index].options[0]}</li>
            <li onClick={(e)=>checkans(1)} className={classstate==1?questions[index].correctAnswer===1?"correct":"wrong":""}>{questions[index].options[1]}</li>
            <li onClick={(e)=>checkans(2)} className={classstate==2?questions[index].correctAnswer===2?"correct":"wrong":""}>{questions[index].options[2]}</li>
            <li onClick={(e)=>checkans(3)} className={classstate==3?questions[index].correctAnswer===3?"correct":"wrong":""}>{questions[index].options[3]}</li>
            </ul>
            <button onClick={idxinc}>Next</button><br></br>
            <div className='index'>{index+1} of 5 question</div>
        </div>
        );
}
export default Quiz;