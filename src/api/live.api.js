import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/live-tracking`;


// projectsApi manages the projects endpoints
export const liveApi = {
    get: get(),
};

// get live tracking of project
function get() {
    return async (project_id, id) => {
        return fetchWrapper.get(`${baseUrl}/${project_id}?id=${id}`);
    }
}