import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0); //usf

  const countPlus = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={countPlus}>Нажми, чтобы увеличить на 1</button>
    </div>
  );
}

export default Counter2;