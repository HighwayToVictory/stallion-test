import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/projects`;


// userProjectsApi manages the projects crud by users group
export const userProjectsApi = {
    create: create(),
    remove: remove(),
    execute: execute()
};

// create a new project
function create() {
    return async (namespace_id, name, host, port, description, labels, params, endpoints, secure) => {
        const body = {
            "name": name,
            "host": host,
            "port": port,
            "description": description,
            "http_secure": secure,
            "labels": labels,
            "params": params,
            "endpoints": endpoints
        };

        return fetchWrapper.post(`${baseUrl}/${namespace_id}`, body);
    }
}

// remove a project
function remove() {
    return async (namespace_id, project_id) => {
        return fetchWrapper.delete(`${baseUrl}/${namespace_id}/${project_id}`);
    }
}

// execute a project
function execute() {
    return async (namespace_id, project_id) => {
        const body = {}

        return fetchWrapper.post(`${baseUrl}/${namespace_id}/${project_id}`, body);
    }
}
