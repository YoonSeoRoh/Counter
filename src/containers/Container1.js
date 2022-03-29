import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter1 from "../components/Counter1";
import {
  counter1_increase,
  counter1_decrease,
} from "../actions/counter_action";
const Container1 = () => {
  const number = useSelector((state) => state.counter1);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(counter1_increase());
  };
  const onDecrease = () => {
    dispatch(counter1_decrease());
  };
  return (
    <Counter1
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter1>
  );
};

export default Container1;
