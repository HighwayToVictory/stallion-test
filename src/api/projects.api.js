import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/projects`;
const namespacesBaseUrl = `${import.meta.env.VITE_API_URL}/namespaces`;


// projectsApi manages the projects get endpoints
export const projectsApi = {
    get: get(),
    getSingle: getSingle(),
    download: download()
};

// get all projects
function get() {
    return async (namespace_id) => {
        return fetchWrapper.get(`${namespacesBaseUrl}/${namespace_id}`);
    }
}

// get single project
function getSingle() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.get(`${baseUrl}/${namespace_id}/${project_id}`);
    }
}

// download document
function download() {
    return (namespace_id, project_id, id) => {
        return `${baseUrl}/${namespace_id}/${project_id}/${id}`;
    }
}
