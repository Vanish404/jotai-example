import React, { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { useHistory } from "react-router-dom";

import { selectedUserAtom, createUserAtom, initialUser } from "../../atom/users";
import { createPostAtom } from "../../atom/posts";

const CreateUser = () => {
  const histroy = useHistory();
  const [currenUser, setCurrentUser] = useAtom(selectedUserAtom);
  const [, createUser] = useAtom(createUserAtom);
  const [, createPost] = useAtom(createPostAtom);

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
    setCurrentUser(initialUser);
  }, [histroy, setCurrentUser])

  const handleCreate = useCallback(async () => {
    await createUser(currenUser);
    await createPost({ id: currenUser.id, post: { desc: 'somePost' } })
  }, [currenUser, createUser, createPost])


  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <input type="text" value={currenUser.name} onChange={handleChangeName} />
      <button type="button" onClick={handleCreate}>create</button>
      <button type="button" onClick={handleGoBack}>go back</button>
    </div>
  )
}

export default CreateUser;
