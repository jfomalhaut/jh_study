import Axios from 'axios';

const URL = 'http://localhost:4000/api';

const postRequest = async (path, payload) => {
	return await Axios.post(`${URL}/${path}`, payload);
};

const getRequest = async (path) => {
	return await Axios.get(`${URL}/${path}`);
};

export const UserLogin = (payload) => {
	const path = '/signin';
	return postRequest(path, payload);
};