import { axiosClient } from './axiosClient';
import { isAuthenticated } from './auth'

const { user, token } = isAuthenticated();

const CategoryApi = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `/categories/create/${user._id}`;
        return axiosClient.post(url, category, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    remove(id) {
        const url = `/categories/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    update(id, data) {
        const url = `/categories/${id}`;
        return axiosClient.put(url, data);
    }
}
export default CategoryApi;