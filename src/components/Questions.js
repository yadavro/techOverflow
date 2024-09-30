import React, { useEffect, useReducer } from "react";
import "../util/Question.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const allQuestion = [
  {
    questionid: 1,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag:['React.js','JavaScript'],
  },
  {
    questionid: 2,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag: ["React.js"],
  },
  {
    questionid: 3,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag:["React.js"],
  },
  {
    questionid: 4,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag: ["React.js"],
  },
  {
    questionid: 5,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag:["React.js"],
  },
  {
    questionid: 6,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag: ["React.js"],
  },
  {
    questionid: 7,
    questionTitle: "How to install React.js",
    question: "I am facing installing react.js on my system ?",
    questionTag:["React.js"],
  },
];
// const initialState = {
//   // questionId: '',
//   // questionTitle:'',
//   // questionDescription:'',
//   // questionTag:'',
//   post: {},
//   error: "",
//   loading: true,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_POST":
//       return {
//         loading: false,
//         error: "",
//         post: action.payload,
//       };
//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         error: "Error loading question from db",
//         post: {},
//       };
//     default:
//       state;
//   }
// };

function Questions() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const navigate=useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("/api/allquestion")
  //     .then((response) => {
  //       console.log(response);
  //       dispatch({ type: "FETCH_POST", payload: response.data });
  //     })
  //     .catch((error) => {
  //       dispatch({ type: "FETCH_ERROR" });
  //     });
  // }, []);

  const handleTag=(tag)=>{
    navigate(`/tag/${tag}`,{state:{questionTag:tag}});
  }

  const handleClick=(questionid,title,description)=>{
    navigate(`/questions/${questionid}`,{state:{questionId:questionid, title:title,description:description}});
  }

  const questions = allQuestion.map((question) => {
    return (
      <div key={question.questionid} className="question-container">
        <div className="question-title" onClick={() => handleClick(question.questionid,question.questionTitle,question.question)}>
          {question.questionTitle}
        </div>
        <div className="question-description">{question.question}</div>
        <div className="question-tag">{question.questionTag.map((tag, index) => (
            <div className="question-tag" key={index} onClick={()=>handleTag(tag)}>{tag}</div>
          ))}</div>
      </div>
    );
  });
  return (
    <div className="question">
      <div className="question-header">
        <p className="question-title">All Questions</p>
        <button className="ask-button" onClick={()=>{navigate("/askQuestion")}}>Ask Question</button>
      </div>
      <div>{allQuestion.length ? questions : null}</div>
    </div>
  );
}

export default Questions;
