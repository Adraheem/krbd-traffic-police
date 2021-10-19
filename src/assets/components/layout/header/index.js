import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../../redux/actions/authActions";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

const Header = ({ auth, logoutUser }) => {
  return (
    <header>
      <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <div className="uk-inline">
              <button
                className={`uk-button uk-button-default ${styles.button}`}
                type="button"
              >
                <Icon icon="carbon:user-avatar-filled-alt" fontSize="2rem" />
              </button>
              <div
                className="uk-padding-small uk-border-rounded"
                data-uk-dropdown="mode: click"
              >
                <div className="uk-width-medium">
                  <h4>{auth.user.name}</h4>
                  <p>Senior Traffic Officer</p>
                  <p>Dept: Congestion Control</p>

                  <p className="uk-margin-remove-bottom">
                    <button
                      onClick={() => logoutUser()}
                      className="uk-button uk-button-secondary uk-button-large uk-width-1-1 uk-border-rounded shrink-on-click"
                    >
                      Logout
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
