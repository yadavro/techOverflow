import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
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

function TagDetail() {
 // const [state, dispatch] = useReducer(reducer, initialState);
 const navigate=useNavigate();
 const location = useLocation();
 const { questionTag } = location.state;

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

 const handleClick=(questionid)=>{
   navigate(`/questions/${questionid}`,{state:{questionId:questionid}});
 }

 const questions = allQuestion.map((question) => {
   return (
     <div key={question.questionid} className="question-container">
       <div className="question-title" onClick={() => handleClick(question.questionid)}>
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
       <p className="question-title">[{questionTag}]</p>
     </div>
     <div>{allQuestion.length ? questions : null}</div>
   </div>
 );
}

export default TagDetail

