import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from '../../../firebase';
import CategoryApi from '../../../api/CategoryApi'

const ProductAddPage = ({ onAdd }) => {
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandSubmit = async (data) => {
        const file = data.photo[0];
        console.log(file);
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then(async (url) => {
                // setUrlImage(url);
                console.log(url);
                const newData = {
                    ...data,
                    photo: url,

                }
                await onAdd(newData);
                history.push('/admin/product');
            })
        }).catch(err => console.log('erorr', err))
    }
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
                        Add Product
                    </h1>

                </div>
            </header>
            <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className={`form-control ${errors.name ? 'border-danger' : ''}`} id="floatingInput" placeholder="name@example.com"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="floatingInput">Name product</label>
                        {errors.name && <span className="text-danger"> Bắt buộc phải nhập</span>}
                    </div>
                    <div class="form-group">
                        <input type="file" class="form-control" id="product-image" {...register('photo')} />
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingPassword" placeholder="Password"
                            {...register('price')}
                        />
                        <label htmlFor="floatingPassword">Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                            {...register('description')}
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
                    <button type="submit" className="btn btn-primary"> Add </button>
                </div>
            </form>


        </div >
    )
}

export default ProductAddPage
