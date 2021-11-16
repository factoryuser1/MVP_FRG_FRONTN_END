import axios from "axios";

const SOLDIER_URL = "localhost:8080/api/frg/soldier";
const SOLDIER_URL_WITH_PROXY = "/api/frg/soldier";

export const getSoldiers = async () => {
    return  axios.get(SOLDIER_URL_WITH_PROXY);
}

export const addNewSoldier = async (soldier) => {
    return await axios.post(SOLDIER_URL_WITH_PROXY, soldier);
}

export const updateSoldier = async (id, soldier) => {
  return await axios.patch(`${SOLDIER_URL_WITH_PROXY}/${id}`, soldier);
}

export const deleteSoldier = async (id) => {
    return axios.delete(`${SOLDIER_URL_WITH_PROXY}/${id}`);
}

export const getSoldierById = async (id) => {
    return await axios.get(`${SOLDIER_URL_WITH_PROXY}/${id}`);
}

export const getSoldierByEmail = async (soldier) => {
  return await axios.get(`${SOLDIER_URL_WITH_PROXY}/${soldier.email}`);
}