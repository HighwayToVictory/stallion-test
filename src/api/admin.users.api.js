import { fetchWrapper } from '@/helpers';

// backend admin api address
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;


// adminUsersApi handles the http requests to users at admin group
export const adminUsersApi = {
    get: get(),
    remove: remove(),
    getSingle: getSingle(),
    create: create()
};

// get all users
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

// get user by id
function getSingle() {
    return async (id) => {
        return fetchWrapper.get(`${baseUrl}/${id}`);
    }
}

// remove a user
function remove() {
    return async (id) => {
        await fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

// create user
function create() {
    return async (username, password, role) => {
        const body = {
            "username": username,
            "password": password,
            "role": role
        };

        await fetchWrapper.post(`${baseUrl}`, body);
    }
}
