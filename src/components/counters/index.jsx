import React from 'react';
import Counter from "../counter";


const Counters = ({counters, onIncrement, onDecrement, onReset, onDelete}) => {
    return (
        <div>
            {
              counters.map((c, i) => <Counter key={c.id} onReset={onReset} onIncrement={onIncrement} onDecrement={onDecrement} idx={i} onDelete={onDelete} id={c.id} count={c.value} />)
            }
        </div>
    );
}

export default Counters;