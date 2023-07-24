import { fetchWrapper } from '@/helpers';

// backend admin api address
const baseUrl = `${import.meta.env.VITE_API_URL}/admin/namespaces`;


export const namespacesApi = {
    get: get(),
    create: create(),
    remove: remove(),
    update: update(),
    getSingle: getSingle()
};

function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}

function create() {
    return async (name) => {
        return fetchWrapper.post(baseUrl, {"name": name});
    }
}

function remove() {
    return async (id) => {
        return fetchWrapper.delete(`${baseUrl}/${id}`);
    }
}

function update() {
    return async (id, user_ids) => {
        return fetchWrapper.put(baseUrl, {"namespace_id": id, "user_ids": user_ids});
    }
}

function getSingle() {
    return async (id) => {
        return fetchWrapper.get(`${baseUrl}/${id}`);
    }
}
