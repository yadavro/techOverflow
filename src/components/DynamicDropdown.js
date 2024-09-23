import React, { useState } from "react";
import "../util/DynamicDropdown.css";
function DynamicDropdown({onSelectedOptionsChange}) {
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
    const updatedOptions = [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    setDropdownOptions([]);
    setInputValue(""); // Clear the text input after selection
    onSelectedOptionsChange(updatedOptions); // Pass updated options to parent
  };

  // Remove selected option if needed
  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((opt) => opt !== option);
    setSelectedOptions(updatedOptions);
    onSelectedOptionsChange(updatedOptions); // Pass updated options to parent
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
            <li
              className="option"
              key={index}
              onClick={() => handleSelectOption(option)}
            >
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
