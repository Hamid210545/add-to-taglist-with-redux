import React, { useState } from "react";
import "./TagList.styles.css";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag, clearAllTags } from "../../redux/actions/Action";
import { IoMdPricetags } from "react-icons/io";

function TagList() {
  const [inputValue, setInputValue] = useState("");
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  const handleAddTag = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      dispatch(addTag(inputValue.trim()));
      setInputValue("");
    } else {
      alert("Input value empty");
    }
  };

  const handleRemoveTag = (index) => {
    dispatch(removeTag(index))
  };

  const handleClearAllTags = () => {
    dispatch(clearAllTags());
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
    
  };


  return (
    <>
      <div className="wrapper">
        <h2
          style={{
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          TagList
        </h2>
        <div className="title">
          <h2>
            <IoMdPricetags />
            Tags
          </h2>
        </div>
        <div className="content">
          <ul>
            {tags.map((tag, index) => {
              return (
              <li key={index}>
                {tag}
                  <RxCross1 className="cross-icon" 
                   onClick={() => handleRemoveTag(index)}/>
              </li>
              )
            })}
            <form onSubmit={handleAddTag}>
              <input
              type="text"
              value={inputValue}
              onChange={handleOnChange}
              onSubmit={handleAddTag}
            />
            <button className="add-btn" onClick={handleAddTag}>
              Add
            </button>
            </form>
            
          </ul>
        </div>
        <div className="details">
          <button onClick={handleClearAllTags}>Remove All</button>
        </div>
      </div>
    </>
  );
}

export default TagList;
