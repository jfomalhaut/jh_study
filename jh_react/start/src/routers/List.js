import React from 'react';

function list({history, match : {params : { name }}, location}) {
    return (
        <h1> List Component </h1>
    );
};

export default list;