import axios from "axios";

// const SOLDIER_URL = "localhost:8080/api/frg/soldier";
const SOLDIER_URL_WITH_PROXY = "/api/frg/soldier";

export const getSoldiers = async () => {
    return await axios.get(SOLDIER_URL_WITH_PROXY);
}