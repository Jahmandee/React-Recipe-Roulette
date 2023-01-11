import React from "react";

function Users(props) {
  return (
    <div>
      <h2>User</h2>
      {props.users.map((user) => (
        <div style={{ border: user.blocked ? "2px solid red" : undefined }}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          {user.blocked ? <h3>This user is blocked</h3> : null}
        </div>
      ))}
    </div>
  );
}

export default Users;
