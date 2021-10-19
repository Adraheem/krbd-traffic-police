import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../assets/components/layout";
import AddCarPage from "../pages/add-car";
import AppealPage from "../pages/appeal";
import AddAppeal from "../pages/appeal/add";
import CarPage from "../pages/car";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import AddOffence from "../pages/offence/add";
import SearchPage from "../pages/search";
import PrivateRoute from "./privateRoute";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/appeal/:car/:id" component={AddAppeal} />
          <PrivateRoute exact path="/history" component={HistoryPage} />
          <PrivateRoute exact path="/add-car" component={AddCarPage} />
          <PrivateRoute exact path="/appeal" component={AppealPage} />
          <PrivateRoute exact path="/car/:id" component={CarPage} />
          <PrivateRoute exact path="/search/:type" component={SearchPage} />
          <PrivateRoute exact path="/offence/:car/add" component={AddOffence} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AllRoutes;
