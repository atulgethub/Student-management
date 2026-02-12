import axios from "axios";

const BASE_URL = "http://localhost:5000/api/students";

export const getStudents = () => axios.get(BASE_URL).then(res => res.data);
export const addStudent = (student) => axios.post(BASE_URL, student).then(res => res.data);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateStudent = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
