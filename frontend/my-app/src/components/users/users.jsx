import React from "react";
import { useAtom } from "jotai";

import { usersQueryAtom } from "../../atom/users";

const Users = () => {
  const [users] = useAtom(usersQueryAtom)
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
      {users && users?.map(user => (
        <ul key={user.id}>
          <li>
            {user.name}
          </li>
          <button type="button">
            view details
          </button>
        </ul>
      ))}
    </div>
  )
}

export default Users;
