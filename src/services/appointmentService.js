import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/appointments/';

export const getAppointments = () => {
    return axios.get(API_URL);
};

export const createAppointment = (appointmentData) => {
    return axios.post(API_URL, appointmentData);
};

export const updateAppointment = (id, appointmentData) => {
    return axios.put(`${API_URL}${id}/`, appointmentData);
};

export const deleteAppointment = (id) => {
    return axios.delete(`${API_URL}${id}/`);
};
