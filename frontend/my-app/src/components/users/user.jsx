import React, { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { useHistory } from "react-router-dom";

import { userQueryAtom, selectedUserAtom } from "../../atom/users";

const User = () => {
  const histroy = useHistory();
  const [user] = useAtom(userQueryAtom);
  const [currenUser, setCurrentUser] = useAtom(selectedUserAtom);

  const handleChangeName = useCallback(
    (event) => {
      setCurrentUser({
        ...currenUser,
        name: event.target.value
      })
    },
    [setCurrentUser, currenUser],
  );

  const handleGoBack = useCallback(() => {
    histroy.push("/users");
  }, [histroy])

  useEffect(() => {
    if(user.id) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser]);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
      {
        currenUser && <>
          <input type="text" value={currenUser.name} onChange={handleChangeName} />
          <button type="button" onClick={handleGoBack}>go back</button>
        </>
      }
    </div>
  )
}

export default User;
