const baseUrl = 'http://localhost:3000';

const userUrl = baseUrl + '/users'
const productUrl = baseUrl + '/products'
const serviceUrl = baseUrl + '/services'

const get = url => fetch(url).then(resp => resp.json());

const getUsers = () => get(userUrl);
const getProducts = () => get(productUrl);
const getServices = () => get(serviceUrl);



export default { getUsers,getProducts,getServices }


