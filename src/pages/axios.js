import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.ir/'
})

const newInstance = {
    ...instance,
    post: (url, data) => {
        return instance.post(url, data)
    }
}

export default newInstance