import "./styles/traffic-police-globals.css";
import "./styles/general.scss";
import AllRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { loginUser, logoutUser } from "./redux/actions/authActions";
import { Toaster } from "react-hot-toast";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(loginUser(token));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />
      <Toaster position="bottom-left" />
    </Provider>
  );
}

export default App;
