// import React, { useEffect, useState } from 'react';

// function Input() {
//     const [data, setData] = useState('');

//     const onChangeData = (ev) => {
//         const {target : {value}} = ev;
//         setData(value);
//     }
//     return (
//         <div>
//             <input value={data} onChange={onChangeData}/>
//             <h1> Input Value : {data} </h1>
//         </div>
//     );
// };

// export default Input;

// import React, {useEffect, useState} from 'react';

// function PhoneBook() {
//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [age, setAge] = useState('');

//     const onChangeName = (ev) => {
//         const {target : {value}} = ev;
//         setName(value);
//     }

//     const onChangeNum = (ev) => {
//         const {target : {value}} = ev;
//         setPhoneNumber(value);
//     }

//     const onChangeAge = (ev) => {
//         const {target : {value}} = ev;
//         setAge(value);
//     }

//     return (
//         <div>
//             <span> Name : </span> <input value={name} onChange={onChangeName}></input><span> {name} </span>
//             <br></br>
//             <span> Phone Number : </span> <input value={phoneNumber} onChange={onChangeNum}></input><span> {phoneNumber} </span>
//             <br></br>
//             <span> Age : </span><input value={age} onChange={onChangeAge}/><span> {age} </span>
//         </div>
//     )
// }

// export default PhoneBook;

import React, {useEffect, useRef, useState} from 'react';

const field = {
    name : '',
    age : '',
    phoneNumber : ''
}

function PhoneBook() {
    const userRef = useRef();
    const [list, setList] = useState([]);
    const [info, setInfo] = useState(field);
    const {name, age, phoneNumber} = info;


    const onChageData = (ev) => {
        const { target : {value, name}} = ev;
        setInfo({
            ...info,
            [name] : value
        });
    }

    const resetData = () => {
        setInfo(field);
    };

    const delteData = (itemIdx) => {
        const newList = list.filter((item, idx) => idx !== itemIdx);
        setList(newList);
    }

    const register = (e) => {
        e.preventDefault();

        const newList = list.concat(info);
        setList(newList);
        userRef.current.focus();
    }

    useEffect(() =>  {
        console.log(list);
    }, [list]);

    return (
        <div>
            <form onSubmit={register}>
                <span> Name : </span> <input value={name} name="name" onChange={onChageData} ref={userRef}></input><span> {name} </span>
                <br></br>
                <span> Phone Number : </span> <input value={phoneNumber} name="phoneNumber" onChange={onChageData}></input><span> {phoneNumber} </span>
                <br></br>
                <span> Age : </span><input value={age} name="age" onChange={onChageData}/><span> {age} </span>
                <br></br>
                <article>
                    <button> Submit </button>
                </article>
            </form>
            <button onClick={resetData}> Reset </button>
            <ul>
                {list.map((item, idx) => (
                    <li key={`PHONEBOOK${idx}`}>
                        <div> {idx + 1} </div>
                        <div> {item.name} </div>
                        <div> {item.age} </div>
                        <div> {item.phoneNumber} </div>

                        <button onClick={() => delteData(idx)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PhoneBook;