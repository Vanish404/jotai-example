import React, { useCallback } from "react";
import { useAtom } from "jotai";
import { useHistory } from "react-router-dom";

import { usersQueryAtom } from "../../atom/users";

const Users = () => {
  const histroy = useHistory();
  const [users] = useAtom(usersQueryAtom);

  const handleRedirect = useCallback((id) => () => {
    histroy.push(`/users/${id}/edit`)
  }, [histroy]);

  const handleCreateUser = useCallback(() => {
    histroy.push(`/users/new`);
  }, [histroy])

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <button type="button" onClick={handleCreateUser}>create user</button>
      {users?.map(user => (
        <ul key={user.id}>
          <li>
            {user.name}
          </li>
          <button type="button" onClick={handleRedirect(user.id)}>
            edit
          </button>
        </ul>
      ))}
    </div>
  )
}

export default Users;
