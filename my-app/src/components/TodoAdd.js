import React, { useState } from 'react'

const TodoAdd = (props) => {
    const [inputValue, setInputValue] = useState("");
    const onHandleSubmit = e => {
        e.preventDefault();
        // gửi state lên app.js : inputValue
        props.onAdd(inputValue)
    }
    const onHandleChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div>
            {inputValue}
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoAdd


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     
// })
// var input = document.querySelector('#name')
// input.addEventListener('change', e => {
//     e.target.value // get value input
// })