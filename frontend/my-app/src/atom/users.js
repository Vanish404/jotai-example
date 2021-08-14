import { atom } from "jotai"
import { atomWithQuery } from "jotai/query";
import axios from "axios";

export const usersQueryAtom = atomWithQuery(() => ({
  queryKey: "users",
  queryFn: async (): Promise<Study[]> => {
    const res: AxiosResponse = await axios.get("http://localhost:8888/api/users");
    return await res.data;
  },
  retryDelay: (retryAttempt) =>
    Math.min(retryAttempt > 1 ? retryAttempt * 5000 : 5000, 60 * 1000),
}));
