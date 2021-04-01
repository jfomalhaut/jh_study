import React from 'react';

function Home({ history }) {

	const goList = () => {
		history.push('/list/kevin');
	};

	return (
		<div>
			<h1>Home Component</h1>
			<button onClick={() => goList()}>go List</button>
			{/* <button onClick={goList}>go List</button> */}
		</div>
	);
};

export default Home;