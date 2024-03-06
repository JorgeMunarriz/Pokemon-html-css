import React, { useState } from "react";
import styled from "styled-components";

const PokeballContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const PokeballTop = styled.div`
  width: 100%;
  height: 50%;
  background-color: #cc0000; /* Rojo */
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: transform 0.3s ease; /* Transición para la transformación */
  transform-origin: center bottom;
`;

const PokeballBottom = styled.div`
  width: 100%;
  height: 50%;
  background-color: #ffffff; /* Blanco */
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const Pokeball: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePokeball = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PokeballContainer onClick={togglePokeball}>
      <PokeballTop style={{ transform: isOpen ? "rotateX(180deg)" : "none" }} />
      <PokeballBottom />
    </PokeballContainer>
  );
};

export default Pokeball;
