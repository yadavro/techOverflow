import React, { useEffect, useState } from "react";
import "../util/AskQuestion.css";
import TextEditor from "./TextEditot";
import DynamicDropdown from "./DynamicDropdown";
// const tags=[javascript,html,css,react.js, js, python, c++,c, java, springboot];

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [details, setDetails] = useState("");
  const [findouts, setFindouts] = useState("");
  const [tags, setTags] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`title: ${title} \n details: ${details} \n findouts: ${findouts}\n Tags: ${tags}`)
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleNext = (step) => {
    setFormStep(step);
  };
  const handleDetailsChange = (content) => {
    const trimmedText = content.replace(/<p>|<\/p>/g, '');
    setDetails(trimmedText);
  };
  const handlefindoutsChange = (content) => {
    const trimmedText = content.replace(/<p>|<\/p>/g, '');
    setFindouts(trimmedText);
  };
  const handleSelectedTagsChange = (tags) => {
    setTags(tags);
  };
  useEffect(() => {}, [setFormStep]);
  return (
    <div className="askQuestion">
      <h1>Ask a public question</h1>
      <form onSubmit={handleSubmit}>
        <div className="guidelines">
          <p>Writing a good question</p>
          <p>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process.
          </p>
          <p>
            Looking to ask a non-programming question? See the topics here to
            find a relevant site.
          </p>
          <p>steps</p>
          <ul className="steps">
            <li className="step">
              Summarize your problem in a one-line title.
            </li>
            <li className="step">Describe your problem in more detail.</li>
            <li className="step">
              Describe what you tried and what you expected to happen.
            </li>
            <li className="step">
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li className="step">
              Review your question and post it to the site.
            </li>
          </ul>
        </div>
        <div className={`title ${formStep < 1 ? "disabled" : ""}`}>
          <strong>Title</strong>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="e.g. Is there an R function finding the index of an element in a vector?"
            onChange={handleTitle}
            disabled={formStep < 1}
          />
          <button
            className="firstnext"
            type="button"
            onClick={() => handleNext(2)}
            disabled={!title.trim()}
          >
            Next
          </button>
        </div>
        <div className={`introduction ${formStep < 2 ? "disabled" : ""}`}>
          <p>Introduce the problem</p>
          <p>
            Explain how you encounteresd the problem you’re trying to solve, and
            any difficulties that have prevented you from solving it yourself.
          </p>
        </div>
        <div className={`detail ${formStep < 2 ? "disabled" : ""}`}>
          <strong>What are the details of your problem?</strong>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <TextEditor
            nextClick={() => handleNext(3)}
            onContentChange={handleDetailsChange}
          />
        </div>
        <div className={`findouts ${formStep < 3 ? "disabled" : ""}`}>
          <strong>What did you try and what were you expecting?</strong>
          <p>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </p>
          <TextEditor
            nextClick={() => handleNext(4)}
            onContentChange={handlefindoutsChange}
          />
        </div>
        <div className={`tag ${formStep < 4 ? "disabled" : ""}`}>
          <strong>Tags</strong>
          <p>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
          <DynamicDropdown onSelectedOptionsChange={handleSelectedTagsChange} />
        </div>
        <button type="submit" disabled={formStep < 4}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AskQuestion;
