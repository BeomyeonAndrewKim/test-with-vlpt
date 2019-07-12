import React, { useState, useCallback } from "react";

const TodoForm = () => {
  const [value, setValue] = useState(" ");
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">등록</button>
    </div>
  );
};

export default TodoForm;
