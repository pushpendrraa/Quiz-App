import React ,{useState} from 'react';
import './Quiz.css';

function Quiz({questions}){

    const [index,setindex]=useState(0);
    // const [showResult, setShowResult] = useState(false);
    const [lock,setlock]=useState(false);
    const idxinc=()=>{
        setindex(index+1);
    }
    const checkans=(e,op)=>{
        if(lock==false){
             if(op==questions[index].correctAnswer-1){
            e.target.classList.add("correct");
            setlock(true);

        }
        else{
             e.target.classList.add("wrong");
                         setlock(true);

        }

        }
       
        
    };
   
    return (
        <div className='Container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{questions[index].question}</h2>
            <ul>
            <li onClick={(e)=>checkans(e,0)}>{questions[index].options[0]}</li>
            <li onClick={(e)=>checkans(e,1)}>{questions[index].options[1]}</li>
            <li onClick={(e)=>checkans(e,2)}>{questions[index].options[2]}</li>
            <li onClick={(e)=>checkans(e,3)}>{questions[index].options[3]}</li>
            </ul>
            <button onClick={idxinc}>Next</button><br></br>
            <div className='index'>{index+1} of 5 question</div>
        </div>
    );

}

export default Quiz;