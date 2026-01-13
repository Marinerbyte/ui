import { sendWS } from "../ws";
import { useState } from "react";

export default function Rooms({ onJoin }) {
  const [room, setRoom] = useState("");

  const join = () => {
    if (!room) return;

    sendWS({
      handler: "joinchatroom",
      id: crypto.randomUUID(),
      name: room,
      roomPassword: ""
    });

    onJoin(room);
  };

  return (
    <div className="card">
      <input
        placeholder="Room name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={join}>Join Room</button>
    </div>
  );
}