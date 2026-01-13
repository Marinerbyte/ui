import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h2>Login</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => onLogin(name)}>Connect</button>
    </div>
  );
}