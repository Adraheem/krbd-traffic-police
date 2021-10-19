import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from "./styles.module.scss";

const Layout = ({ children, auth }) => {
  return (
    <div>
      {auth.isAuthenticated && <Sidebar />}

      <main className={auth.isAuthenticated ? styles.main : ""}>
        {auth.isAuthenticated && <Header />}

        <div className="uk-container uk-container-small">{children}</div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Layout);
