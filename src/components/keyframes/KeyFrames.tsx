import React from "react";
import styled, { keyframes } from "styled-components";
import { Pokeball } from ".";

const animate = keyframes`
  100% {
    transform: translate(0vw, 100vh) scale(0.10);
  }
  0% {
    transform: translate(-20vw, -10vh) scale(0);
  }
  5% {
    transform: translate(200vw, 25vh) scale(0.25);
  }
`;
const Bubble = styled.span<{duration: string}>`
  position: relative;
  min-width: 30px;
  height: 30px;
  background: #fff;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #705afe, 0 0 100px #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  animation: ${animate} 5s linear infinite;
  animation-duration: ${(props: { duration: string }) => `calc(100s/${props.duration})`};

  &:nth-child(even) {
    background: #ff0707;
    box-shadow: 0 0 0 10px #dddddd;
  }
`;
const BubblesContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;
const ContainerFrames = styled.div`
  position: relative;
  grid-area: 1 / 1 / 11 / 11;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #313131;
  z-index: -10;
`;

export const KeyFrames: React.FC = () => {
  const bubbleDurations: string[] = Array.from({ length: 28 }, () => `${Math.floor(Math.random() * 27) + 1}`);

  return (
    <ContainerFrames>
      <BubblesContainer>
        {bubbleDurations.map((duration, index) => (
          <Bubble key={index} duration={duration} >
            <Pokeball/>
          </Bubble>
        ))}
      </BubblesContainer>
    </ContainerFrames>
  );
};
