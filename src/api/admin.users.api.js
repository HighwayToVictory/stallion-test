import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;


export const usersApi = {
    get: get(),
    remove: remove(),
    create: create()
};

function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

function remove() {
    return async (id) => {
        await fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

function create() {
    return async (username, password, role) => {
        await fetchWrapper.post(`${baseUrl}`, {"username": username, "password": password, "role": role});
    }
}
