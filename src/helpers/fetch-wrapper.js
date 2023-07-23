import { useAuthStore } from '@/stores';


export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};


function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };

        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }

        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    const { token } = useAuthStore();

    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);

    if (isLoggedIn && isApiUrl) {
        return { 'x-token': `${token}` };
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
        const { user, logout } = useAuthStore();
        
        if ([401, 403].includes(response.status) && user) {
            logout();
        }

        const error = (data && data.message) || response.status;

        return Promise.reject(error);
    }

    return data;
}
