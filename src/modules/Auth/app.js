import App from "../../baseApp";

export default [
  {
    path: "/login",
    component: App.loadFile(() => import("./login")),
    options: { exact: true },
  },
];
