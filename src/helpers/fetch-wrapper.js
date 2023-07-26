import { useAuthStore, useAlertStore } from '@/stores';
import { statusUtil } from '@/utils';


// fetchWrapper is used to make http requests
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
    file: file()
};


// create http request
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

function file() {
    return (url) => {
        const requestOptions = {
            method: 'GET',
            headers: authHeader(url)
        };

        return fetch(url, requestOptions)
            .then( res => res.blob() )
            .then( blob => {
                return window.URL.createObjectURL(blob);
            })
            .catch(error => {
                console.log(error);

                const alertStore = useAlertStore();
                alertStore.error("FTP server error!");

                return null;
            })
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

// handle response
async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
        const { user, logout } = useAuthStore();
        
        if ([401, 403].includes(response.status) && user) {
            logout();
        }

        const error = (data && data.message) || statusUtil.status(response.status);

        const alertStore = useAlertStore();
        alertStore.error(error);

        return Promise.reject(error);
    }

    return data;
}
