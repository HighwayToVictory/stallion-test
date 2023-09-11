import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/metrics`;


// userProjectsApi manages the projects crud by users group
export const metricsApi = {
    get: get()
};

// get cluster metrics
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}
