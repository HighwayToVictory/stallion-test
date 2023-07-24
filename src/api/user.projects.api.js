import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/user/namespaces`;


// userProjectsApi manages the projects crud by users group
export const userProjectsApi = {
    create: create(),
    remove: remove()
};

// create a new project
function create() {
    return async (namespace_id, name, host) => {
        const body = {
            "name": name,
            "host": host
        };

        return fetchWrapper.post(`${baseUrl}/${namespace_id}/projects`, body);
    }
}

// remove a project
function remove() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.delete(`${baseUrl}/${namespace_id}/projects/${project_id}`);
    }
}
