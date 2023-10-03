import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/metrics`;


// metricsApi handles the metrics requests
export const metricsApi = {
    get: get()
};

// get cluster metrics
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}
