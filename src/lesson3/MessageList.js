import { useState } from "react";
import PropTypes from 'prop-types'

function MessagesList({ text }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Привет, как дела?' },
    { id: 2, text: 'Это тестовое сообщение' },
    { id: 3, text: 'Марина лапуля' }
  ]);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}

MessagesList.propTypes = {
  text: PropTypes.string.isRequired
}
export default MessagesList;




// import { messages } from "../data";
// import Message from "./Message";

// export default function MessagesList() {
//   return (
//     <>
//       {messages.map((message) => (
//         <Message key={message.id} {...message} />
//       ))}
//     </>
//   );
// }



// import { PropTypes } from "prop-types";

// export default function Message({ text, time, author }) {
// return (
// <>
// <h4>Author №{author}</h4>
// <p>{text}</p>
// <p>Post time: {time}</p>
// </>
// );
// }

// Message.propTypes = {
// text: PropTypes.string.isRequired,
// time: PropTypes.string.isRequired,
// author: PropTypes.number.isRequired,
// };