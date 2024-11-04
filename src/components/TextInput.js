import { useState } from "react";

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" value={text} placeholder=" Введите текст" onChange={handleChange}></input>
      <p>{text}</p>
    </>
  )
}


export default TextInput;