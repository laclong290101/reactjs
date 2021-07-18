import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn, authenticate, isAuthenticated } from '../../api/auth.js';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, SetRedirectToRef] = useState(false);
    const { user } = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        SetRedirectToRef(true)
                        // history.push('/')
                    })
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    const redirectUser = () => {
        if (redirectToRef) {
            if (user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button className="btn btn-primary">Đăng nhập</button>
                <Link to="/signup"> Create User ? </Link>
            </form>
        )
    }
    return (
        <div>
            {redirectUser()}
            {showError()}
            {showLoading()}
            {signInForm()}
        </div>
    )
}

export default SignIn