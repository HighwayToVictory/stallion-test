import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/namespaces`;


// namespacesApi manages the namespaces get commands
export const namespacesApi = {
    get: get()
};

// get all user namespaces
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}
