import React from 'react';

function AddCounter ({onAdd}) {
    return (
        <button onClick={onAdd} className="btn master btn-primary">Add Counter</button>
    );
}

export default AddCounter;