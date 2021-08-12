import { TOKEN } from './constants';

export function setToken(token){
    sessionStorage.setItem(TOKEN, token);
}

export function getToken() {
    return sessionStorage.getItem(TOKEN);
}