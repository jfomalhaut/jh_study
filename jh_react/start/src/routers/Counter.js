import React, { useEffect, useState } from 'react';

const PRICE = 7000;
const FEE = 3000;

function Counter() {
    const [count, setCount] = useState(0);
    const [fee, setFee] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    useEffect(() => {
        const total = count * PRICE;
        if (total < 30000 && total > 0) { 
            setFee(3000);
        }
        else {
            setFee(0);
        }
    }, [count])

    // const detectFive = () => {
    //     if (count == 0) { 
    //         return 
    //     }
    //     if (count % 5 == 0) {
    //         console.log('5의 배수입니다.')
    //     }
    // }
    
    // useEffect( () => {
    //     if (count === 0) {
    //         return 
    //     } 
    //     if (count % 5 == 0) {
    //         console.log(count + ' : 5의 배수입니다')
    //     }
    // }, [count]);
    


    return (
        <div>
            <h1> PRICE : <span> {PRICE} </span></h1>
            <h1> Count : {count} </h1>
            <button onClick={increment}> Increment </button>
            <button onClick={reset}> Reset </button>
            <button onClick={decrement}> Decrement </button>
            <h1> Price : {PRICE * count} won </h1>
            <h1> Fee : {fee} won </h1>
            <h1> Total : {PRICE * count + fee} </h1>
        </div>
    );
};

export default Counter;