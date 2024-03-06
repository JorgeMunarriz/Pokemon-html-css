import React from "react";
import styled from "styled-components";

const PokeballContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const PokeballTop = styled.div`
  width: 100%;
  height: 50%;
  background-color: #cc0000; /* Rojo */
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;

const PokeballBottom = styled.div`
  width: 100%;
  height: 50%;
  background-color: #ffffff; /* Blanco */
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const Pokeball: React.FC = () => {
  return (
    <PokeballContainer>
      <PokeballTop />
      <PokeballBottom />
    </PokeballContainer>
  );
};

export default Pokeball;
