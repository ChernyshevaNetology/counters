import React from 'react';
import Counter from "../counter";


const Counters = ({counters, onIncrement, onDecrement, onDelete}) => {
    return (
        <div>
            {
              counters.map((c) => <Counter key={c.id} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} id={c.id} count={c.value} />)
            }
        </div>
    );
}

export default Counters;