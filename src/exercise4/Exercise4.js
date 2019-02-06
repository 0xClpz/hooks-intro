import { useState } from "react";
import React from "react";
import { Container } from "../shared/Container";
import { HomeLink } from "../shared/HomeLink";
import { Title } from "../shared/Title";
import { Button } from "../shared/Button";
import { BashCommand } from "../shared/BashCommand";

export const useBoolean = initial => {
  return [initial, () => {}];
};

export const Exercise4 = () => {
  const [bool, toggle] = useBoolean(false);
  return (
    <Container>
      <HomeLink />
      <Title>4. Use Boolean</Title>
      <p>When clicking the button below it should switch between on and off</p>
      <p>
        Do not edit the Exercise4 component, only edit the useBoolean function
      </p>
      {bool ? (
        <Button data-testid="on" onClick={toggle}>
          On 🌕
        </Button>
      ) : (
        <Button data-testid="off" onClick={toggle}>
          Off 🌚
        </Button>
      )}

      <hr />
      <p>You can run the following command to make sure everything is fine:</p>
      <BashCommand>yarn test src/exercise4/Exercise4.test.js</BashCommand>
    </Container>
  );
};
