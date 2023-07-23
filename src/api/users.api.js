import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;


export const usersApi = {
    get: get(),
    remove: remove()
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
