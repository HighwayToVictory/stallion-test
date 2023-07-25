import { fetchWrapper } from '@/helpers';

// backend admin api address
const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;


// adminUsersApi handles the http requests to users at admin group
export const adminUsersApi = {
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