import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const CategoryAddPage = ({ onAddCate }) => {
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandSubmit = async (data) => {
        const newData = {
            ...data,
        }
        await onAddCate(newData);
        history.push('/admin/categories');
    }
    return (
        <div>
            <header className="tw-bg-white tw-shadow">
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        Add Category
      </h1>

                </div>
            </header>
            <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className={`form-control ${errors.name ? 'border-danger' : ''}`} id="floatingInput" placeholder="name@example.com"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="floatingInput">Name Category</label>
                        {errors.name && <span className="text-danger"> Bắt buộc phải nhập</span>}
                    </div>
                    <button type="submit" className="btn btn-primary"> Add </button>
                </div>
            </form>


        </div >
    )
}

export default CategoryAddPage
