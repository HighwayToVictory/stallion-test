import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/profile`;


// userApi manages the user profile
export const userApi = {
    get: get(),
    update: update()
};

// create a new project
function update() {
    return async (username) => {
        const body = {
            "username": username
        };

        return fetchWrapper.post(baseUrl, body);
    }
}

// remove a project
function get() {
    return async () => {
        return fetchWrapper.get(baseUrl);
    }
}
