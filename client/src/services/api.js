import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // change to your deployed URL when ready
});

// Example: Add auth token if needed
// API.interceptors.request.use((req) => {
//   const user = localStorage.getItem('user');
//   if (user) req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
//   return req;
// });

export const registerUser = (formData) => API.post('/auth/register', formData);
export const loginUser = (formData) => API.post('/auth/login', formData);

export const fetchUsers = () => API.get('/users');
export const fetchProjects = () => API.get('/projects');
export const createProject = (projectData) => API.post('/projects', projectData);

export const requestMentor = (data) => API.post('/mentors/request', data);
export const getMentorRequests = (mentorId) => API.get(`/mentors/requests/${mentorId}`);
