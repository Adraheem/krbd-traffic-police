import Header from "./header";
import Sidebar from "./sidebar";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div className="uk-container uk-container-small">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
