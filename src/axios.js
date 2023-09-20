import axios from "axios";
import {baseUrl} from'./constants/constants'
console.log(baseUrl)
const instance = axios.create({
    baseURL: baseUrl,
});

export default instance