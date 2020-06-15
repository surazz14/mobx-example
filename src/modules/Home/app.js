import App from "../../baseApp";

export default [
  {
    path: "/home",
    component: App.loadFile(() => import("./home")),
    options: { exact: true },
  },
];
