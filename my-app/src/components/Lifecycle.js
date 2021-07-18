import React, { useState, useEffect } from 'react';

// class Clock extends React.Component {
//     constructor(props) { // 1
//         super(props);
//         this.state = { count: 0 };
//     }

//     componentDidMount() { // 3
//         console.log('didmount')
//     }
// componentDidUpdate(){
//  document.title = `You clicked ${count} times`;
//}
//     render() { // 2
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.count}.</h2>
//             </div>
//         );
//     }
// }
// export default Clock;

function Clock() {
    const [count, setCount] = useState(0); // 1
    useEffect(() => { // 3
        // didmount -> Chỉ được gọi 1 lần khi render component
        document.title = `You clicked ${count} times`;
    }, [])
    return ( // 2
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {count}.</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}
export default Clock;

