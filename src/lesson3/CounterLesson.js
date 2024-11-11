import { useState } from "react";
import Button from '@mui/material/Button';

function CounterLesson3() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  }

  const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>{count}</p>
      {count === 0 && <p>Число не может быть меньше нуля</p>}
      <Button onClick={Plus} variant="outlined">Плюс 1</Button>
      <Button onClick={Minus} variant="outlined">Минус 1</Button>
    </div>
  );
}

export default CounterLesson3;