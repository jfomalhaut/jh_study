import React, { useEffect, useState } from 'react';

const field = { 
	name: '', 
	age: '', 
	phone: '' 
};

function Input() {
	const [info, setInfo] = useState(field);
	const { name, age, phone } = info;

	const onChangeData = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	useEffect(() => {
		console.log(info);
	}, [info]);

	return (
		<div>
			<input value={name} name="name" onChange={onChangeData} />
			<input value={age} name="age" onChange={onChangeData} />
			<input value={phone} name="phone" onChange={onChangeData} />
			<h1>Input Value:</h1>
		</div>
	);
};

export default Input;