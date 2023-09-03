import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import * as Styles from "./styles";

const DefaultLayout = () => {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  );
};

export default DefaultLayout;
