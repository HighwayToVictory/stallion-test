import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;


export const usersApi = {
    get: get(),
    remove: remove()
};

function get() {
    return () => {
        // todo: return users
    }
}

function remove() {
    return (id) => {
        // todo: delete user
    }
}
