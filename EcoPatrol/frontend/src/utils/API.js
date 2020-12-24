import axios from "axios";

export default axios.create({
    baseURL: "http://80.87.194.239/api/projects/",
    responseType: "json"
});