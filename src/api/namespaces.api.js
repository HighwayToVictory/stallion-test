import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/namespaces`;


export const viewApi = {
    get: get()
};

function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}
