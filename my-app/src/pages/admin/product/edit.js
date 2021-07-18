import { React, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../../../firebase';
import ProductApi from '../../../api/ProductApi'
import CategoryApi from '../../../api/CategoryApi'



const ProductEditPage = ({ onUpdate }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [products, setProducts] = useState({}); // 1
    const { id } = useParams();
    const [imageChange, setImageChange] = useState("")

    let history = useHistory();

    useEffect(() => {
        // didMount 
        const getProduct = async () => {
            try {
                // neu thanh cong
                const { data } = await ProductApi.get(id);
                setProducts(data);
                reset(data);
            } catch (error) {
                //neu that bai
                console.log(error)
            }
        }
        getProduct();
    }, [])
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then(async (url) => {
                console.log(url);
                setImageChange(url)

            })
        }).catch(err => console.log('erorr', err))
        console.log(file);

    }

    const onHandSubmit = async (data) => {
        // 3
        const newData = {
            ...data,
            photo: imageChange
        }
        console.log(newData);
        await onUpdate(id, newData);
        history.push('/admin/product');

    }
    const { name, photo, price, quantity, description } = products

    const [categories, setCategories] = useState([]); // 1
    // 3
    useEffect(() => {
        // didMount 
        const getCategories = async () => {
            try {
                // neu thanh cong
                const { data } = await CategoryApi.getAll();
                setCategories(data);
                // console.log(data);
            } catch (error) {
                //neu that bai
                console.log(error)
            }
        }
        getCategories();
    }, [])
    return (
        <div>
            <header className="tw-bg-white tw-shadow">
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        Edit Product
                    </h1>

                </div>
            </header>
            <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                            {...register('name')} defaultValue={name}
                        />
                        <label htmlFor="floatingInput">Name product</label>
                    </div>
                    <div class="form-group">
                        <input type="file" class="form-control" id="product-image" onChange={handleChangeImage} />
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingPassword" placeholder="Password"
                            {...register('price')} defaultValue={price}
                        />
                        <label htmlFor="floatingPassword">Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                            {...register('description')} defaultValue={description}
                        />
                        <label htmlFor="floatingInput">Description</label>

                    </div>
                    <select className="form-select" id="categories" aria-label="Default select example"{...register('categoryId')} >
                        <option selected>Open this select </option>
                        {categories.map((category, index) => (
                            <option value={`${category._id}`} key={index}> {category.name} </option>
                        ))}
                    </select>
                    {/* <div className="form-floating">
                        Shipping <input type="checkbox" {...register('shipping')} />
                    </div> */}
                    <button type="submit" className="btn btn-primary"> Update </button>
                </div>
            </form>


        </div>
    )

}

export default ProductEditPage
