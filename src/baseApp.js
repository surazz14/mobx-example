import get from "lodash/get";

import config from "./common/config/app";
import loadFile from "./common/utility/fileLoader";
import RouteBuilder from "./common/utility/routeBuilder";

let App = {
  loadFile,
  RouteBuilder,
  config: config(),
  getConfig: function (feature) {
    return get(this.config, feature);
  },

  utils: {
    handleError: function (error) {
      console.log("Error==============", error);
    },
  },
};

export default App;
