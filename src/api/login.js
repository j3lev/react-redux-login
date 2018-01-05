import axios from "axios";

const baseUrl = 'http://localhost:3001';

export function signup(data) {
    return axios.post(baseUrl + '/signup', { username: data.username, password: data.password });
}

export function login(data) {
    return axios.post(baseUrl + '/login', { username: data.username, password: data.password });
}