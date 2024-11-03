import React, { useState } from "react";

export function MessagesList() {
  const [messages, setMessages] = useState([
    { id: 'id1', text: 'message 1', heading: 'Heading 1' },
    { id: 'id2', text: 'message 2', heading: 'Heading 2' },
    { id: 'id3', text: 'message 3', heading: 'Heading 3' },
  ]);

  return messages.map((message) =>
    <>
      <h2>{message.heading}</h2>
      <div key={message.id}>{message.text}</div>
    </>
  );

  // return messages.map((message) => (
  //   <React.Fragment key={message.id}>
  //     <h2>{message.heading}</h2>
  //     <div>{message.text}</div>
  //   </React.Fragment>
  // ));
}


export default MessagesList;