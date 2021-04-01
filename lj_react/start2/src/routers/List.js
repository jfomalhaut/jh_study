import React from 'react';

function List({ history, match: { params: { name }}, location }) {
	return (
		<h1>List Component, name is {name}</h1>
	);
};

export default List;