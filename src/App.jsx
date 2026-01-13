import { useState } from "react";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import Users from "./components/Users";
import Chat from "./components/Chat";
import { connectWS } from "./ws";

// 🔥 YOUR RENDER BOT WS URL (ALREADY SET)
const BACKEND = "wss://tictactoe-hd.onrender.com/howdies";

export default function App() {
  const [logged, setLogged] = useState(false);
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const onWS = (data) => {
    if (data.handler === "chatroommessage") {
      setMessages((m) => [...m, data]);
    }

    if (data.handler === "activeoccupants") {
      setUsers(data.users || []);
    }
  };

  const login = (username) => {
    connectWS(`${BACKEND}?token=${username}`, onWS);
    setLogged(true);
  };

  return (
    <div className="app">
      {!logged ? (
        <Login onLogin={login} />
      ) : (
        <>
          <Rooms onJoin={setRoom} />
          <Users users={users} />
          <Chat room={room} messages={messages} />
        </>
      )}
    </div>
  );
}