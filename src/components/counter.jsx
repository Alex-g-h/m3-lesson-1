import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };

  const formatClass = () => {
    const classes = "badge m-2 ";
    return count === 0 ? classes + "bg-warning" : classes + "bg-primary";
  };

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleTags = (id) => {
    // setTags(["123", "456"]);
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    console.log(id);
  };

  const renderTags = () => {
    return tags && tags.length !== 0
      ? tags.map((tag) => (
          <li
            key={tag}
            className="btn btn-primary btn-sm m-2"
            onClick={() => handleTags(tag)}
          >
            {tag}
          </li>
        ))
      : "No tags";
  };

  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }

  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={formatClass()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
