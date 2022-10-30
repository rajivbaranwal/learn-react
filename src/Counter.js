import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increse = () => {
    setCount(count + 1);
  };

  const decrese = () => {
    return setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrese}>-</button>
      {count}
      <button onClick={increse}>+</button>
    </div>
  );
}

export default Counter;
