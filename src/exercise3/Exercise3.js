import React, { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import { HomeLink } from "../shared/HomeLink";
import axios from "axios";
import { Button } from "../shared/Button";
import styled from "styled-components";
import { Spinner } from "../shared/Spinner";

const BASE_URL = "https://swapi.co/api";

const getCharacter = id =>
  axios.get(`${BASE_URL}/people/${id}`).then(({ data }) => data);

const ActiveButton = styled(Button)`
  ${props => props.active && "border-color: red;"};
  &:focus {
    outline: none;
  }
`;

const CharBox = styled.pre`
  border: 1px dotted white;
  padding: 1rem;
  margin: 1rem;
`;

export const Exercise3 = () => {
  const [selectedId, setSelected] = useState(null);
  const loading = false;
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    /**
     * Call getCharacter with selectedId and store the result of this call inside of setCharacterInfo
     */
  });

  return (
    <Container>
      <HomeLink />
      <h1>3. Use Effect</h1>
      <p>It</p>
      <ul>
        <li>{' '} - ✅ Should call getCharacter and call setCharacterInfo with the result</li>
        <li>{' '} - ✅ Should display a spinner while the data are loading</li>
        <li>{' '} - ✅ Should set the selected button as "active" when selectedId === #id</li>
      </ul>
      {[1, 2, 3, 4, 5].map(id => (
        <ActiveButton
          data-testid={`button-${id}`}
          active={selectedId === id}
          key={id}
          onClick={() => setSelected(id)}
        >
          Query #{id}
        </ActiveButton>
      ))}
      <CharBox data-testid="char-info">
        {loading ? <Spinner /> : JSON.stringify(characterInfo, null, 2)}
      </CharBox>
    </Container>
  );
};
