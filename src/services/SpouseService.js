import axios from "axios";

// const SOLDIER_URL = "localhost:8080/api/frg/spouse";
const SPOUSE_URL_WITH_PROXY = "/api/frg/spouse";

export const getSpouses = async () => {
    return await axios.get(SPOUSE_URL_WITH_PROXY);
}

export const addNewSpouse = async (spouse) => {
    return await axios.post(SPOUSE_URL_WITH_PROXY, spouse);
}
export const updateSpouse = async (id, spouse) => {
    return await axios.patch(`${SPOUSE_URL_WITH_PROXY}/${id}`, spouse);;
}

export const deleteSpouse = async (id) => {
    return axios.delete(`${SPOUSE_URL_WITH_PROXY}/${id}`);
}
export const getSpouseById = async (id) => {
    return await axios.get(`${SPOUSE_URL_WITH_PROXY}/${id}`);
}

export const getSpouseByEmail = async (spouse) => {
    return await axios.get(`${SPOUSE_URL_WITH_PROXY}/${spouse.email}`);
}