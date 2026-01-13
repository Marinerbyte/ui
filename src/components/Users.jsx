export default function Users({ users }) {
  return (
    <div className="card">
      <h4>Users</h4>
      {users.map((u,i)=><div key={i}>{u.username}</div>)}
    </div>
  );
}