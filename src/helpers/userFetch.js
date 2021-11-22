
const url = 'https://reqres.in/api/users?page=2'

export const getUsers = async () => {
const resp = await fetch(url)
const {data} = await resp.json()

return data
}