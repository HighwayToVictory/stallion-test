import { fetchWrapper } from '@/helpers';

// backend admin api address
const baseUrl = `${import.meta.env.VITE_API_URL}/namespaces`;


// adminNamespacesApi handles the http requests to namespaces at admin group
export const adminNamespacesApi = {
    get: getAll(),
    create: create(),
    remove: remove(),
    update: update(),
    getSingle: get()
};

// get all namespaces
function getAll() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

// create a new namespace
function create() {
    return async (name) => {
        const body = {
            "name": name
        };

        return fetchWrapper.post(baseUrl, body);
    }
}

// remove a namespace
function remove() {
    return async (id) => {
        return fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

// update namespace users
function update() {
    return async (id, user_ids) => {
        const body = {
            "namespace_id": id,
            "user_ids": user_ids
        };

        return fetchWrapper.put(baseUrl, body);
    }
}

// get single namespace
function get() {
    return async (id) => {
        return fetchWrapper.get(`${baseUrl}/${id}`);
    }
}
