import React, { useState } from 'react'
import "../util/AskQuestion.css";
import TextEditor from './TextEditot';
import DynamicDropdown from './DynamicDropdown';
// const tags=[javascript,html,css,react.js, js, python, c++,c, java, springboot];

function AskQuestion() {
  const [title,setTitle]=useState('');
  const handleSubmit=()=>{

  }
  return (
    <div className='askQuestion'>
      
      <h1>Ask a public question</h1>
      <form onSubmit={handleSubmit}>
      <div className='guidelines'>
      <p>Writing a good question</p>
      <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
      <p>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
      <p>steps</p>
      <ul className='steps'>
        <li className='step'>Summarize your problem in a one-line title.</li>
        <li className='step'>Describe your problem in more detail.</li>
        <li className='step'>Describe what you tried and what you expected to happen.</li>
        <li className='step'>Add “tags” which help surface your question to members of the community.</li>
        <li className='step'>Review your question and post it to the site.</li>
      </ul>
      </div>
      <div className='title'>
        <strong>Title</strong>
        <p>Be specific and imagine you’re asking a question to another person.</p>
        <input type="text" name='title' value={title} placeholder='e.g. Is there an R function finding the index of an element in a vector?' />
      </div>
      <div className='introduction'>
        <p>Introduce the problem</p>
        <p>Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.</p>
      </div>
      <div className='detail'>
      <strong>What are the details of your problem?</strong>
      <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
      <TextEditor/>
      </div>
      <div className='findouts'>
      <strong>What did you try and what were you expecting?</strong>
      <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
      <TextEditor/>
      </div> 
      <div className='tag'>
        <strong>Tags</strong>
        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
        <DynamicDropdown/>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AskQuestion
