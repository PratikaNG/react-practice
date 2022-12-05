import React from "react";

const NewTask = ({ handleChange, task, add }) => {
  return (
    <div>
      <form>
        <input
          name="TASK"
          value={task}
          placeholder="type here"
          onChange={handleChange}
        />
        <button type="submit" onClick={add}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewTask;
