import axios from 'axios';
import _ from 'lodash';
import { logout, getToken } from './auth';

if (!_.isString(process.env.REACT_APP_URL)) {
	throw new Error(`you should define a REACT_APP_URL in a ".env"
    or ".env.local" at the root of the project`);
}

const api = axios.create({ baseURL: process.env.REACT_APP_URL });

api.interceptors.response.use((res) => res, function(error) {
	if (error.response) {
		if (error.response.status === 401 || error.response.status === 403) {
			if (!error.response.data.error.message === 'Invalid email or password.') {
				//TODO: redirect to login page
				logout();
			}
		}
	}

	return Promise.reject(error);
});

// use this to add token to each request
api.interceptors.request.use(
	function(config) {
		config.headers.Authorization = `${getToken()}`;
		return config;
	},
	function(err) {
		return Promise.reject(err);
	}
);

export function webRegistartion(payload) {
	return api.post('web/registration', payload);
}

export function getInfo(payload) {
	return api.get(`web/password?signup_token=${payload}`);
}

export function createPassword(payload) {
	return api.put('web/registration', payload);
}

export function login(payload) {
	return api.post('/local/login', payload);
}

export function dashboardInfo() {
	return api.get('/web/dashboard');
}

export function getPasswordCode(payload) {
	return api.post('/web/password', payload);
}

export function sendInvitation(payload) {
	return api.post('/web/refer', payload);
}

export function checkInvitation(payload) {
	return api.post('/web/referral', payload);
}

export function createreferPassword(payload) {
	return api.put('/web/registration', payload);
}

export function validatePassword(code) {
	return api.get(`/web/password/code?code=${code}`);
}

export function createNewPassword(payload) {
	return api.put('/web/password', payload);
}

export function requestChangePassword(payload) {
	return api.post('/web/password');
}

export function directPasswordChange(payload) {
	return api.post('/web/changePassword', payload);
}

export function ocrUploadImage(payload) {
	return api.post('/web/ocr/upload', payload);
}

export function ocrDemo(payload) {
	return api.post('/web/ocr/demo', payload);
}

export function getImagesForUser() {
	return api.get('/images');
}

export function addImageToS3(payload) {
	return api.post('/post/add/image', payload);
}

export function ocr(payload) {
	return api.post('/ocr', payload);
}

export function saveOcr(payload) {
	return api.post('/ocr/save', payload);
}
