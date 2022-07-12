import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/Dialogs"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/News"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Music"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Settings"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
