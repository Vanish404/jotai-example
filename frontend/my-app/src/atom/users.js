import { atom } from "jotai"
import { atomWithQuery } from "jotai/query";
import axios from "axios";

export const userIdAtom = atom(null);

export const usersQueryAtom = atomWithQuery(() => ({
  queryKey: "users",
  queryFn: async () => {
    const res = await axios.get("http://localhost:8888/api/users");
    return await res.data;
  },
  retryDelay: (retryAttempt) =>
    Math.min(retryAttempt > 1 ? retryAttempt * 5000 : 5000, 60 * 1000),
}));

export const initialUser = {
  id: '',
  name: ''
};

export const selectedUserAtom = atom(initialUser);

export const userQueryAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(userIdAtom) ],
  queryFn: async ({ queryKey: [, userId ] }) => {
    const res = await axios.get(`http://localhost:8888/api/users/${userId}`);
    return await res.data;
  },
  retryDelay: (retryAttempt) =>
    Math.min(retryAttempt > 1 ? retryAttempt * 5000 : 5000, 60 * 1000),
  // we can avoid refetching like that
  // refetchOnMount: false,
}));

export const createUserAtom = atom(
  (get) => get(selectedUserAtom),
  async (get, set, user) => {
    const res = await axios.post(`http://localhost:8888/api/users`, user);
    set(selectedUserAtom, res.data);
  }
);

