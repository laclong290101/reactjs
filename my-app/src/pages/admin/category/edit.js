import { React, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import CategoryApi from '../../../api/CategoryApi'


const CategoryEditPage = ({ onUpdateCate }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState({}); // 1
    const { id } = useParams();

    let history = useHistory();

    useEffect(() => {
        // didMount 
        const getCategory = async () => {
            try {
                // neu thanh cong
                const { data } = await CategoryApi.get(id);
                setCategories(data);
                reset(data);
            } catch (error) {
                //neu that bai
                console.log(error)
            }
        }
        getCategory();
    }, [])
    const { name } = categories

    const onHandSubmit = async (data) => {
        const newData = {
            ...data
        }
        console.log(newData);
        await onUpdateCate(id, newData);
        history.push('/admin/categories');
    }
    return (
        <div>
            <header className="tw-bg-white tw-shadow">
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        Edit Category
      </h1>

                </div>
            </header>
            <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className={`form-control ${errors.name ? 'border-danger' : ''}`} id="floatingInput" placeholder="name@example.com"
                            {...register('name', { required: true })} defaultValue={name}
                        />
                        <label htmlFor="floatingInput">Name Category</label>
                        {errors.name && <span className="text-danger"> Bắt buộc phải nhập</span>}
                    </div>
                    <button type="submit" className="btn btn-primary"> Update </button>
                </div>
            </form>


        </div >
    )

}

export default CategoryEditPage
