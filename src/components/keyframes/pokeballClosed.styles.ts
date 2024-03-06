import styled from 'styled-components';

const PokeballClosedStyles = styled.button`
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        background: red;
        width: 100%;
        height: 50%;
    }
    &::after {
        content: "";
        position: absolute;
        top: calc(50% - 6px);
        background: white;
        width: 100%;
        height: 50%;
    }
`;

export default PokeballClosedStyles;
