import React from 'react';
import Counter from "../counter";


const Counters = ({counters, onIncrement, onDecrement}) => {
    return (
        <div>
            {
              counters.map((c) => <Counter key={c.id} onIncrement={onIncrement} onDecrement={onDecrement} id={c.id} count={c.value} />)
            }
        </div>
    );
}

export default Counters;