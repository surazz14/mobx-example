import User from "./user/user";
const store = {
  user: User.create({}),
};

window.app = store;

export default store;
