import { BASE_URL } from '../constants';

export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
export const setupAxios = (axios, store) => {
    axios.defaults.baseURL = BASE_URL
    axios.interceptors.request.use(config => {
            const { auth: { user }, } = store.getState()
            if (user.accessToken) {
                config.headers['Authorization'] = `Bearer ${user.accessToken}`
            }
            return config
        },
        err => Promise.reject(err))
}