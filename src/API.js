const baseUrl = 'http://localhost:3000';

const userUrl = baseUrl + '/users'

const get = url => fetch(url).then(resp => resp.json());

const getUsers = () => get(userUrl);

export default { getUsers }


