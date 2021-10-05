import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../assets/components/layout";
import CarPage from "../pages/car";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import SearchPage from "../pages/search";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/car/:id" component={CarPage} />
          <Route exact path="/search/:type" component={SearchPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AllRoutes;
