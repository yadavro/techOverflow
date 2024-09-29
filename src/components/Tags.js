import React, { useState } from 'react'
import "../util/Tags.css";
import { useNavigate } from 'react-router-dom';
const tags=[
    {
        tagId:1,
        tagTitle:"python",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:2,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:3,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:4,
        tagTitle:"python",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:5,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:6,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:7,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:8,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:9,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:10,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:11,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    },
    {
        tagId:12,
        tagTitle:"java",
        tagContent:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This.."
    }
]

function Tags() {
    const [inputValue, setInputValue] = useState('');
    const [filteredTags, setFilteredTags] = useState(tags);
    const navigate=useNavigate();
  
    // Function to filter tags based on the input value
    const filterTags = () => {
      if (inputValue.length >= 3) {
        const filtered = tags.filter(tag => 
          tag.tagTitle.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredTags(filtered);
      } else {
        setFilteredTags(tags); // Show all tags if less than 3 characters are entered
      }
    };
  
    // Handle Enter key press
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        filterTags();
      }
    };
    const handleClick=(tag)=>{
        navigate(`/tag/${tag}`,{state:{questionTag:tag}});
    }
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        filterTags(value);
      };
  
    return (
    <div className='tagcard'>
        <strong>Tags</strong>
        <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
  
        <input
          type="text"
          placeholder="Search tags..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="tag-input"
        />
  
        <div className='allTags'>
          {filteredTags.length > 0 ? (
            filteredTags.map(tag => (
              <div key={tag.tagId}>
                <div className='tagtitle' onClick={()=>handleClick(tag.tagTitle)}>{tag.tagTitle}</div>
                <div className='tagContent'>{tag.tagContent}</div>
              </div>
            ))
          ) : (
            <p>No matching tags found.</p>
          )}
        </div>
      </div>
    );
  }
export default Tags
