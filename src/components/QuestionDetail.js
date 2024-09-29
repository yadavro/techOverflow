import React from 'react'
import { useLocation } from 'react-router-dom';


function QuestionDetail() {
  const location = useLocation();
const { questionId} = location.state;
  return (
    <div>
    <h1>hello world</h1>
      <strong>{questionId}</strong>
    </div>
  )
}

export default QuestionDetail
