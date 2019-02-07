import React, { useReducer, useEffect } from "react";
import { Container } from "../shared/Container";
import { HomeLink } from "../shared/HomeLink";
import { Title } from "../shared/Title";
import { Button } from "../shared/Button";

const increment = "increment";
function reducer(state, action) {
  if (action.type === increment) {
    return state + 1;
  }

  return state;
}

export const useTimer = initial => {
  const [timer, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: increment });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return timer;
};

const shoppingReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      items: {
        [action.payload.id]: [
          ...(state.items[action.payload.id] || []),
          action.payload
        ]
      },
      total: state.total + action.payload.value,
      previousState: state
    };
  }

  if(action.type === 'UNDO'){
    return state.previousState;
  }

  return state;
};

const useShoppingCart = () => {
  const [cart, dispatch] = useReducer(shoppingReducer, {
    total: 0,
    items: {}
  });

  return {
    add: item =>
      dispatch({
        type: "ADD_TO_CART",
        payload: item
      }),
    remove: item =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item
      }),
    undo: () =>
      dispatch({
        type: "UNDO"
      }),
    cart
  };
};

export const Exercise5 = () => {
  const { cart, add, undo } = useShoppingCart();
  return (
    <Container>
      <HomeLink />
      <Title>Shop</Title>
      <Button
        onClick={() => {
          add({
            id: 1,
            name: "baskets",
            value: 50
          });
        }}
      >
        50€ - Baskets
      </Button>
      <Button
        onClick={() => {
          add({
            id: 2,
            name: "jeans",
            value: 30
          });
        }}
      >
        30€ - Jeans
      </Button>
      <Button
        onClick={() => {
          undo();
        }}
      >
        Cancel
      </Button>
      <p>Total: {cart.total}€</p>
    </Container>
  );
};
