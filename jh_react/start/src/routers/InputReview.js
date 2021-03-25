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

import React, {useEffect, useState} from 'react';

const field = {
    name : '',
    age : '',
    phoneNumber : ''
}

let infoSave = [];

function PhoneBook() {
    const[info, setInfo] = useState(field);
    const {name, age, phoneNumber} = info;


    const onChageData = (ev) => {
        const { target : {value, name}} = ev;
        setInfo({
            ...info,
            [name] : value
        });
    }

    const resetData = () => {
        setInfo({
            name : '', 
            age : '', 
            phoneNumber : ''
        });
    };

    const saveData = () => {
        
    }

    useEffect(() =>  {
        console.log(info);
    }, [info]);

    return (
        <div>
            <span> Name : </span> <input value={name} name="name" onChange={onChageData}></input><span> {name} </span>
            <br></br>
            <span> Phone Number : </span> <input value={phoneNumber} name="phoneNumber" onChange={onChageData}></input><span> {phoneNumber} </span>
            <br></br>
            <span> Age : </span><input value={age} name="age" onChange={onChageData}/><span> {age} </span>
            <br></br>
            <button onClick={resetData}> Reset </button>
            <button onClick={resetData}> Save </button>
        </div>
    )
}

export default PhoneBook;