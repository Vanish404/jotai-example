import { atom } from "jotai"
import axios from "axios";

const selectedPostAtom = atom(null);

export const createPostAtom = atom(
  async (get) => get(selectedPostAtom),
  async (get, set, { id, post }) => {
    const res = await axios.post(`http://localhost:8888/api/users/${id}/posts`, post);
    set(selectedPostAtom, res.data);
  }
);

