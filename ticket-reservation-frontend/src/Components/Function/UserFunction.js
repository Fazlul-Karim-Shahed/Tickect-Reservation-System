import axios from "axios"


export const createUser = (obj) => {
    let data = axios.post(process.env.REACT_APP_DATABASE_API + 'User.json', obj).then(data => data.data)
    return data
}

export const getUsers = () => {
    let data = axios.get(process.env.REACT_APP_DATABASE_API + 'User.json').then(data => data.data)
    return data
}