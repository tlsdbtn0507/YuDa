import API from "../api"

export const getDiaries = async () => {

  try {
    const { data } = await API.get('/diary');
    return data;
  } catch (error) {
    throw new Error()
  }
}