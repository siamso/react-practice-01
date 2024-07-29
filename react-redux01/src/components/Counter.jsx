import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementAll, resetAll } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const addValue = Number(amount) || 0;

  const reset = () => {
    setAmount(0);
    dispatch(resetAll());
  };
  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementAll(addValue))}>yo</button>
        <button onClick={() => dispatch(resetAll())}>reset</button>
      </div>
    </section>
  );
}

export default Counter;
