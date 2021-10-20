import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";
import { API_URL } from "../../utils/variables";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";

const LoginPage = (props) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const history = props.history;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`${API_URL}/auth/login`, details)
      .then((response) => {
        setLoading(false);
        props.loginUser(response.data.token);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        if (!!error.response) {
          setErrors(error.response.data);
        }
        toast.error("An error occured");
      });
  };

  return (
    <div className={styles.container}>
      <div className="uk-width-large">
        <Card className="uk-padding uk-padding-remove-horizontal">
          <h2 className="uk-text-center uk-text-bold uk-margin-large-bottom">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="uk-margin">
              <TextInput
                icon="bx:bx-user"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                value={details.email}
                type="email"
                required
              />
              {!!errors.email && (
                <p className="uk-text-small uk-text-danger uk-margin-remove-top">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="uk-margin">
              <TextInput
                icon="mdi:form-textbox-password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                value={details.password}
                type="password"
                required
              />
              {!!errors.password && (
                <p className="uk-text-small uk-text-danger uk-margin-remove-top">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="uk-margin">
              <button
                type="submit"
                className={`uk-button uk-button-large uk-width-1-1 uk-border-rounded ${
                  loading ? "uk-disabled" : "uk-button-primary"
                }`}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
