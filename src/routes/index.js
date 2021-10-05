import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../assets/components/layout";
import HomePage from "../pages/home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AllRoutes;
