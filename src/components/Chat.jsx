import { useState } from "react";
import { sendWS } from "../ws";

export default function Chat({ room, messages }) {
  const [text, setText] = useState("");

  const send = () => {
    sendWS({ handler: "chatroommessage", roomid: room, text });
    setText("");
  };

  return (
    <div className="card">
      <div className="chat">
        {messages.map((m,i)=>(
          <div key={i}><b>{m.username}</b>: {m.text}</div>
        ))}
      </div>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}