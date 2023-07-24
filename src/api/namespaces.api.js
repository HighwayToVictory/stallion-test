import { fetchWrapper } from '@/helpers';

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
        return fetchWrapper.post(baseUrl, {"name": name})
    }
}

function remove() {
    return async (id) => {
        return fetchWrapper.delete(`${baseUrl}/${id}`)
    }
}

function update() {
    return async (id, user_id, flag) => {
        return fetchWrapper.put(baseUrl, {"namespace_id": id, "user_id": user_id, "add": flag})
    }
}

function getSingle() {
    return async (id) => {
        // todo: update api
    }
}
