import React from "react";
import map from "lodash/map";

import App from "./baseApp";

import AuthWrapper from "./modules/Auth/app";
import HomeWrapper from "./modules/Home/app";

const allRoutes = [...AuthWrapper, ...HomeWrapper];

class Routes extends React.Component {
  render() {
    return (
      <>
        {map(allRoutes, (route) => {
          return <App.RouteBuilder {...route} key={`route_${route.path}`} />;
        })}
      </>
    );
  }
}

export default Routes;
