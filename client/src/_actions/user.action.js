import axios from 'axios';
import {
LOGIN_USER,
REGISTER_USER,
ADD_COMPANY,
GET_MARKERS
} from './types'

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function company(dataToSubmit) {

    const request = axios.post('/api/companies/addcompany', dataToSubmit)
        .then(response => response.data)

    return {
        type: ADD_COMPANY,
        payload: request
    }
}

export function getMarker() {
    const request = axios
    .get("/api/company")
    .then((response) => response.data);
    return {
    type: GET_MARKERS,
    payload: request,
    };
}