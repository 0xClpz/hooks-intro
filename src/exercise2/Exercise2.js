import React, { useReducer } from "react";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import { HomeLink } from "../shared/HomeLink";
import {BashCommand} from "../shared/BashCommand"

const counterReducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1

    case 'reset':
      return 0
  }
}

export const Exercise2 = () => {
  const count = 0;
  const dispatch = () => {}
  return (
    <Container>
      <HomeLink />
      <h1>2. Use Reducer</h1>
      <p>Make the following Counter work using useReducer</p>

      <p>
        Count: <span data-testid="exercise-1-count">{count}</span>
      </p>
      <Button data-testid="inc-button" onClick={() => dispatch({type: 'increment'})}>
        Increment
      </Button>
      <Button data-testid="dec-button" onClick={() => dispatch({type: 'decrement'})}>
        Decrement
      </Button>

      <Button data-testid="reset-button" onClick={() => dispatch({type: 'reset'})}>
        Reset
      </Button>


      <hr />
      <p>You can run the following command to make sure everything is fine:</p>
      <BashCommand>yarn test src/exercise2/Exercise2.test.js</BashCommand>
    </Container>
  );
};
