import React, { useState } from 'react'
import AddQuestion from './AddQuestion';

export default function QuizList({list,ind,name}) {

  async function handeldelete(){
    const response = await fetch(`http://localhost:4000/quiz/teacher/deleteQuiz/${list._id}`);
    const res = await response.json();
    if(res.status===200){
      alert("Deleted");
    }
  }
      
    const [control,setControl]=useState("");
     if(control==="add"){
      return (
        <AddQuestion id={list._id} />
      )
     }


      return (
        
        <div className="card" style={{ margin: "2px" }}>
          <div className="card-body" style={{backgroundColor:"pink"}}>
            <h5 className="card-title" style={{ color: "black" }}>
              {list.title}
            </h5>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ color: "black" }}
            >
              {list.description}
            </h6>
            <p className="card-text " style={{ color: "red" }}>
              Marks :{list.totalMarks}
            </p>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ color: "black" }}
            >
              {list.date}
            </h6>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ color: "black" }}
            >
              {list.duration} min
            </h6>
            <h5 className="card-title" style={{ color: "black" }}>
              {list.branch},{list.graduationYear}
            </h5>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ color: "black" }}
            >
              Teacher : {name}
            </h6>
            <div className="d-flex flex-column">
              {/* {style==="green"?<h1>Upcoming Quiz</h1>:<h1>Quiz Completed</h1>} */}
              <button onClick={(e) => setControl("add")} className="card-link" style={{color:"green"}}>Add Question</button>
            <button  className="card-link" style={{color:"red"}} onClick={handeldelete}>Delete</button>
            </div>
          </div>
        </div>
      );
}
