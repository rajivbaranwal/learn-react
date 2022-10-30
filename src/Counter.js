import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increse = () => setCount(count + 1);

  const decrese = () => {
    return setCount(count - 1);
  };

  // const reset = function () {
  //   return setCount(0);
  // };

  const reset = () => setCount(0);

  return (
    <div className="row">
      <div className="text-center mt-5 ">
        <button onClick={decrese} className="btn btn-danger mr-4 px-4">
          -
        </button>
        <div>{count}</div>
        <button onClick={increse} className="btn btn-success px-4">
          +
        </button>
      </div>
      <div className="text-center mt-5">
        <button onClick={reset} className="btn btn-warning ">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
