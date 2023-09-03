import { HourglassMedium, Scroll, Timer } from "phosphor-react";
import * as Styles from "./styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Styles.Container>
      <HourglassMedium size={32} />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styles.Container>
  );
};

export default Header;
