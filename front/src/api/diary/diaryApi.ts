import { DiaryType } from "../../model/types";
import API from "../api"

export const getDiaries = async () => {

  try {
    const { data } = await API.get('/api/diary');
    return data;
  } catch (error) {
    throw new Error()
  }
};

export const fetchMoreDiaries = async (id: number):Promise<DiaryType[]> => {
  try {
    const { data } = await API.get(`/api/diary/${id}`);
    return data
  } catch (error) {
    throw new Error()
  }
};