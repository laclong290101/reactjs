// import { API } from '../config';

export const signUp = (user) => {
    return fetch(`http://localhost:4000/api/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signIn = (user) => {
    return fetch(`http://localhost:4000/api/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signOut = (next) => {
    if (typeof window != "undefined ") {
        localStorage.removeItem('user');
        next();
        return fetch(`http://localhost:4000/api/signout`, {
            method: "GET",
            headers: {
                "Content-Type": "apolications/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}