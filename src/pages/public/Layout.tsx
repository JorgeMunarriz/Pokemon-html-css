import { Footer, Header, Main } from "../../components";
import LayoutStyles from "./layout.styles";
import { KeyFrames } from '../../components/keyframes/KeyFrames';

const Layout = () => {
  return (
    <LayoutStyles>
      <Header />
      <Main />
      <Footer />
      <KeyFrames/>
      
    </LayoutStyles>
  );
};

export default Layout;
