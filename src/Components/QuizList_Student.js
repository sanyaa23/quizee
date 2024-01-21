import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { setQuiz } from '../Redux/QuizRedux';
import { setRanking } from '../Redux/RankingRedux';


export default function QuizList_Student({ list, ind, name }) {
 const history=useHistory();
  const dispatch=useDispatch();
    const selectUser = (state) => state.rootReducer.UserReducer.user;
    const selectQuiz = (state) => state.rootReducer.QuizReducer.quiz;

  function handleStart(){
       dispatch(setQuiz(list));
       alert("Quiz Started !!")
       history.push("/quiz");
    }
    console.log(list._id);
    async function handleRank(){
        const response = await fetch(`http://localhost:4000/leaderBoard/quiz/${list._id}`);
        const res = await response.json();
        dispatch(setRanking(res.data))
        dispatch(setQuiz(list));
        alert("LeaderBoard Loaded !!")
        history.push("/ranking");
  }
    
    return (

        <div className="card" style={{ margin: "2px" }}>
            <div className="card-body" style={{ backgroundColor: "pink" }}>
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
                    Teacher : {list.name}
                </h6>
                <div className="d-flex flex-column">
                    {/* {style==="green"?<h1>Upcoming Quiz</h1>:<h1>Quiz Completed</h1>} */}
                    <button  className="btn btn-primary m-2" onClick={handleStart} >Start</button>
                    <button  className="btn btn-warning m-2" onClick={handleRank} >Ranking</button>
                </div>
            </div>
        </div>
    );
}
