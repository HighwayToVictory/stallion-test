import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/namespaces`;


// projectsApi manages the projects get endpoints
export const projectsApi = {
    get: get(),
    getSingle: getSingle()
};

// get all projects
function get() {
    return async (namespace_id) => {
        return fetchWrapper.get(`${baseUrl}/${namespace_id}`);
    }
}

// get single project
function getSingle() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.get(`${baseUrl}/${namespace_id}/projects/${project_id}`);
    }
}
