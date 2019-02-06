import React from "react";
import styled from "styled-components";
import { Title } from "./shared/Title";
import { navigate } from "@reach/router";
import { Box } from "./shared/Box";

const OuterContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1533543166551-aee8cb8b31fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1976&q=80");
  background-size: cover;
`;

const InnerContainer = styled.div`
  padding: 1rem;
  font-family: "SF Display";
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Home = () => (
  <OuterContainer>
    <InnerContainer>
      <Title color="white">🎣 React 16.8.0 Training 🎣</Title>

      <section className="demo-3">
        <div className="grid">
          <Box onClick={() => navigate("/exercise-1")}>
            <h3>1.</h3>
            <span>Use State</span>
          </Box>
          <Box onClick={() => navigate("/exercise-2")}>
            <h3>2.</h3>
            <span>Use Reducer</span>
          </Box>
          <Box onClick={() => navigate("/exercise-3")}>
            <h3>3.</h3>
            <span>Use Effect</span>
          </Box>
        </div>
      </section>

      <section className="demo-3">
        <div className="grid">
          <Box onClick={() => navigate("/exercise-4")}>
            <h3>4.</h3>
            <span>Use Boolean</span>
          </Box>
        </div>
      </section>
    </InnerContainer>
  </OuterContainer>
);
