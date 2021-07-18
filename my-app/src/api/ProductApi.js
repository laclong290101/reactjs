import { axiosClient } from './axiosClient';
import { isAuthenticated } from './auth'

const { user, token } = isAuthenticated();
const ProductApi = {
    getAll() {
        const url = `/product`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/product/create/${user._id}`;
        return axiosClient.post(url, product,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/product/${id}`;
        return axiosClient.put(url, data);
    }
}
export default ProductApi;