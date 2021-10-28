import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routes";

const appRoutes = (routes) =>
  routes.map(({ layout: Layout, path, component: Component }, index) => (
    <Route
      key={index}
      path={path}
      exact
      render={(props) =>
        Layout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )
      }
    />
  ));

export const Routes = () => (
  <Router>
    <Switch>{appRoutes(routes)}</Switch>
  </Router>
);
