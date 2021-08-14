import { atom } from "jotai"
import { atomWithQuery } from "jotai/query";
import axios from "axios";

export const userIdAtom = atom(null);

export const usersQueryAtom = atomWithQuery(() => ({
  queryKey: "users",
  queryFn: async () => {
    const res: AxiosResponse = await axios.get("http://localhost:8888/api/users");
    return await res.data;
  },
  retryDelay: (retryAttempt) =>
    Math.min(retryAttempt > 1 ? retryAttempt * 5000 : 5000, 60 * 1000),
}));

export const selectedUserAtom = atom(null);

export const userQueryAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(userIdAtom) ],
  queryFn: async ({ queryKey: [, userId ] }) => {
    const res: AxiosResponse = await axios.get(`http://localhost:8888/api/users/${userId}`);
    return await res.data;
  },
  retryDelay: (retryAttempt) =>
    Math.min(retryAttempt > 1 ? retryAttempt * 5000 : 5000, 60 * 1000),
  // we can avoid refetching like that
  // refetchOnMount: false,
}));
