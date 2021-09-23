import React from "react";
import cn from "classnames";

const Counter = ({ count, onIncrement, onDecrement, onReset, onDelete, id }) => {
  return (
    <>
      <div className="row">
        <span className={cn(
            "btn m-2 col-1",
            {'badge-info': count > 0,
            'badge-warning': count < 1}
        )}>{count}</span>
        <button
          onClick={() => onIncrement(id)}
          className="btn col-1 btn btn-primary m-2"
        >
          <i className="fas fa-plus" />
        </button>
        <button
          onClick={() => onDecrement(id)}
          className="btn col-1 btn btn-primary m-2"
          disabled={count < 1}
        >
          <i className="fas fa-minus" />
        </button>
        <button
            onClick={() => onReset(id)}
            className="btn col-1 btn btn-primary m-2">Reset</button>
        <button
            onClick={()=>onDelete(id)}
            className="btn col-1 btn btn-danger m-2">
          <i className="fas fa-times" />
        </button>
      </div>
    </>
  );
};

export default Counter;
