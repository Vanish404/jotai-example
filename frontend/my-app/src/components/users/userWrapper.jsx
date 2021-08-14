import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userIdAtom } from "../../atom/users";
import User from "./user";

const UserWrapper = () => {
  const { id } = useParams();
  const [userID, setUserId] = useAtom(userIdAtom);

  useEffect(() => {
    if (id && userID !== id) {
      setUserId(id);
    }
  }, [id, userID, setUserId]);

  return userID === id ? <User /> : <div>wait for id...</div>
}

export default UserWrapper;
