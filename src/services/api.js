// api.js
const serverUrl = "https://green-home-server-side.vercel.app";
const localUrl = "http://localhost:5000";
const API_BASE_URL = serverUrl;

export const API_ENDPOINTS = {
    houses: `${API_BASE_URL}/houses`,
    reviews: `${API_BASE_URL}/reviews`,
    users: `${API_BASE_URL}/users`,
    bookings: `${API_BASE_URL}/bookings`,
    myApartments: `${API_BASE_URL}/myApartments`,
};
