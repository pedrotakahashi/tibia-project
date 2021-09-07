import { _axios } from "./axios";

export const getCharacterByName = async (name: String) => {
  try {
    if (!name) return;
    const response = await _axios.get(`characters/${name}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllWorlds = async () => {
  try {
    const response = await _axios.get("/worlds.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
