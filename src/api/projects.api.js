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
    return async (id) => {
        return fetchWrapper.get(`${baseUrl}/${id}`);
    }
}

// download document
function download() {
    return (id, document_id) => {
        return `${baseUrl}/${id}/documents/${document_id}`;
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

        return fetchWrapper.post(baseUrl, body);
    }
}

// remove a project
function remove() {
    return async (id) => {
        return fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

// execute a project
function execute() {
    return async (id) => {
        const body = {}

        return fetchWrapper.post(`${baseUrl}/${id}`, body);
    }
}

// rerun a document
function rerun() {
    return async (id, document_id) => {
        const body = {}

        return fetchWrapper.post(`${baseUrl}/${id}/documents/${document_id}`, body);
    }
}
