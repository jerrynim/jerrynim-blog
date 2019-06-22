import React from "react";

interface IProps {
  count: number;
  increase: () => {
    type: string;
  };
}
const CounterPreseter: React.FunctionComponent<IProps> = ({
  count,
  increase
}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};
export default CounterPreseter;
