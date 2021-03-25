import React from 'react';

function Home({history}) {
    const goList = () => {
        history.push('/list/kevin');
    };

    return(
        <div> 
            <h1> Home Component </h1>
            <button onClick={goList}> Go List </button>
        </div>
    );
};

export default Home;