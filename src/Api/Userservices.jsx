import React from 'react';
import ApiAxios from './ApiInstance';

export const SignUp = async (userData) => {
    try {
        const response = await ApiAxios.post('/register', userData);
        const token = response.data.token; // Assuming the token is returned in response
        if (token) {
            localStorage.setItem('authToken', token);
            console.log('Register success', response.data);
        }
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        throw error;
    }
};

export const SignIn = async (formdata) => {
    try {
        const response = await ApiAxios.post('/login', formdata);
        const token = response.data.token; // Assuming the token is returned in response
        if (token) {
            localStorage.setItem('authToken', token);
            console.log('Login success', response.data);
        }
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        throw error;
    }
};
