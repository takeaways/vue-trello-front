import axios from "axios";
import router from "../router";


const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
        .then(res => res.data)
        .catch(error => {
            const { status } = error.response
            if (status === UNAUTHORIZED) {
                return onUnauthorized()
            }
            throw Error(error)
        })
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}
