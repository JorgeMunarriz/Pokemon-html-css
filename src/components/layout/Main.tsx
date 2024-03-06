import { Outlet } from "react-router-dom";
import { MainStyles } from ".";

const Main = () => {
  return (
    <MainStyles>
      <Outlet />
    </MainStyles>
  );
};

export default Main;
