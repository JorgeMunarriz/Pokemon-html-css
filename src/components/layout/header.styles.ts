import styled from "styled-components";

const HeaderStyles = styled.header`
  grid-area: 1 / 1 / 2 / 11;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw 2vw;
  background-color: grey;
  .header__btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    padding: 8px 16px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.6);
    color: black;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    text-overflow: ellipsis;
    svg {
      width: 15px;
      height: 15px;
    }

    &_span {
      padding: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      padding: 8px 16px;
      background-color: rgba(255, 255, 255, 0.6);
      color: black;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
      text-overflow: ellipsis;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
    }
  }
  .pokeball {
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
  }
  .pokeball::before {
    content: "";
    position: absolute;
    background: red;
    width: 100%;
    height: 50%;
  }
  .pokeball::after {
    content: "";
    position: absolute;
    top: calc(50% - 6px);
    background: white;
    width: 100%;
    height: 50%;
    border-top: 5px solid #000;
  }
  .button {
    position: absolute;
    width: 50px;
    height: 50px;
  }
`;

export default HeaderStyles;
