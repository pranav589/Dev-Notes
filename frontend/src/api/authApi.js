import axios from "axios";

const registerUser = (data) => axios.post("/api/user/register", data);

const loginUser = (data) => axios.post("/api/user/login", data);

const verifyUser = (data) => axios.get("/api/user/verify", data);

export { registerUser, loginUser, verifyUser };
