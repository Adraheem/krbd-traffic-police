import { Link } from "react-router-dom";
import { sidebarNav } from "../../../data/sidebar-nav";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router";

import styles from "./styles.module.scss";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}></div>

      <div className={styles.nav}>
        <ul className={`uk-nav uk-nav-default`}>
          {sidebarNav.map((nav, idx) => (
            <li
              className={
                location.pathname === nav.url ||
                location.pathname.startsWith(`${nav.url}/`)
                  ? styles.active
                  : ""
              }
              key={idx}
            >
              <Link to={nav.url}>
                <Icon
                  icon={nav.icon}
                  className="uk-margin-right"
                  fontSize="2rem"
                />{" "}
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
