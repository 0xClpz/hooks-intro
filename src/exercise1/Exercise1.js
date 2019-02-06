import React, { useState } from "react";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import { HomeLink } from "../shared/HomeLink";
import {BashCommand} from "../shared/BashCommand"

export const Exercise1 = () => {
  const count = 0;
  return (
    <Container>
      <HomeLink />
      <h1>1. Use State</h1>
      <p>Make the following Counter work without using a class</p>

      <p>
        Count: <span data-testid="exercise-1-count">{count}</span>
      </p>
      <Button data-testid="inc-button" onClick={() => {}}>
        Increment
      </Button>
      <Button data-testid="dec-button" onClick={() => {}}>
        Decrement
      </Button>


      <hr />
      <p>You can run the following command to make sure everything is fine:</p>
      <BashCommand>yarn test src/exercise1/Exercise1.test.js</BashCommand>
    </Container>
  );
};
