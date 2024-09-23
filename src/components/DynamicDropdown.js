import React, { useState } from "react";
import "../util/DynamicDropdown.css";
function DynamicDropdown() {
  const [inputValue, setInputValue] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const allOptions = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Peach",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filteredOptions = allOptions.filter(
        (option) =>
          option.toLowerCase().includes(value.toLowerCase()) &&
          !selectedOptions.includes(option)
      );
      setDropdownOptions(filteredOptions);
    } else {
      setDropdownOptions([]);
    }
  };
  const handleSelectOption = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
    setDropdownOptions([]);
    setInputValue(""); // Clear the text input after selection
  };

  // Remove selected option if needed
  const handleRemoveOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((opt) => opt !== option)
    );
  };

  return (
    <div className="textarea">
      <input
      className="tag-input"
        rows="4"
        cols="50"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start typing"
      />
      {dropdownOptions.length > 0 && (
        <ul className="dropdown">
          {dropdownOptions.map((option, index) => (
            <li className="option" key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {selectedOptions.length > 0 && (
        <div className="selected-options">
          <strong>Selected:</strong>
          <div>
            {selectedOptions.map((option, index) => (
              <span key={index}>
                {option}
                <button onClick={() => handleRemoveOption(option)}>x</button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicDropdown;
