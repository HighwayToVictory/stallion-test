import { fetchWrapper } from '@/helpers';

// backend admin api address
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;


// usersApi handles the http requests to users crud
export const usersApi = {
    get: get(),
    remove: remove(),
    create: create()
};

// get all users
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

// remove a user
function remove() {
    return async (id) => {
        await fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

// create a new user
function create() {
    return async (username, password) => {
        const body = {
            "username": username,
            "password": password
        };

        await fetchWrapper.post(`${baseUrl}`, body);
    }
}
