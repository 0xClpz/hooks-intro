import React from "react";
import { Container } from "../shared/Container";
import { HomeLink } from "../shared/HomeLink";
import { Title } from "../shared/Title";

export const useTimer = initial => {
  return initial;
};

export const Exercise5 = () => {
  const value = useTimer(1);
  return (
    <Container>
      <HomeLink />
      <Title>5. Use Timer</Title>
      <p>Write a userTimer hook that returns a new value incremented by 1 every second</p>
      <hr />
      <p>{value}</p>
    </Container>
  );
};
