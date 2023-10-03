import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/projects`;


// projectsApi manages the projects endpoints
export const projectsApi = {
    getAll: getAll(),
    get: get(),
    download: download(),
    create: create(),
    remove: remove(),
    execute: execute(),
    rerun: rerun()
};

// get all projects
function getAll() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

// get single project
function get() {
    return async (project_id) => {
        return fetchWrapper.get(`${baseUrl}/${project_id}`);
    }
}

// download document
function download() {
    return (project_id, id) => {
        return `${baseUrl}/${project_id}/documents/${id}`;
    }
}

// create a new project
function create() {
    return async (creator, name, host, port, description, labels, params, endpoints, secure) => {
        const body = {
            "name": name,
            "host": host,
            "port": port,
            "creator": creator,
            "description": description,
            "http_secure": secure,
            "labels": labels,
            "params": params,
            "endpoints": endpoints
        };

        return fetchWrapper.post(`${baseUrl}`, body);
    }
}

// remove a project
function remove() {
    return async (project_id) => {
        return fetchWrapper.delete(`${baseUrl}/${project_id}`);
    }
}

// execute a project
function execute() {
    return async (project_id) => {
        const body = {}

        return fetchWrapper.post(`${baseUrl}/${project_id}`, body);
    }
}

// rerun a document
function rerun() {
    return async (project_id, id) => {
        const body = {}

        return fetchWrapper.post(`${baseUrl}/${project_id}/documents/${id}`, body);
    }
}
