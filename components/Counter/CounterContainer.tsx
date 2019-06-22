import Link from "next/link";
import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CounterPresenter from "./CounterPresenter";
const Container = styled.div`
  border: 1px solid black;
`;
const CounterContainer: React.FunctionComponent = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const increase = useCallback(() => dispatch({ type: "INCREMENT" }), [
    dispatch
  ]);
  return (
    <Container>
      <CounterPresenter count={count} increase={increase} />
      <Link href="/map">
        <a>Map</a>
      </Link>
    </Container>
  );
};
export default CounterContainer;
