import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={updateCount}>click + 1</button>
      {/* <button onClick={() => { setCount(prevstate => ++prevstate) }}>click + 1</button> */}
    </div>
  );
}

export default Counter;
