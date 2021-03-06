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

const useSW = id => {
  const [loading, setLoading] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(
    () => {
      if (!id) return;
      setLoading(true);
      getCharacter(id)
        .then(data => setCharacterInfo(data))
        .then(() => setLoading(false))
        .catch(error => {
          setError(error.response.data.detail);
          console.log();
          setLoading(false);
        });
    },
    [id]
  );

  return {
    loading,
    characterInfo,
    error
  };
};

export const Exercise3 = () => {
  const [selectedId, setSelected] = useState(null);

  const { loading, characterInfo, error } = useSW(selectedId);

  return (
    <Container>
      <HomeLink />
      <h1>3. Use Effect</h1>
      <p>It</p>
      <ul>
        <li>
          {" "}
          - ✅ Should call getCharacter and call setCharacterInfo with the
          result
        </li>
        <li> - ✅ Should display a spinner while the data are loading</li>
      </ul>
      {[1, 2, 3, 4, 5, "error"].map(id => (
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
        {error && error}
        {loading ? <Spinner /> : JSON.stringify(characterInfo, null, 2)}
      </CharBox>
    </Container>
  );
};
