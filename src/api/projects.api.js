import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;


export const projectsApi = {
    get: get(),
    create: create(),
    remove: remove(),
    getSingle: getSingle()
};

function get() {
    return async (id) => {
        return fetchWrapper.get(`${baseUrl}/namespaces/${id}`);
    }
}

function getSingle() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.get(`${baseUrl}/namespaces/${namespace_id}/projects/${project_id}`);
    }
}

function create() {
    return async (namespace_id, name, host) => {
        return fetchWrapper.post(`${baseUrl}/user/namespaces/${namespace_id}/projects`, {"name": name, "host": host});
    }
}

function remove() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.delete(`${baseUrl}/user/namespaces/${namespace_id}/projects/${project_id}`);
    }
}
