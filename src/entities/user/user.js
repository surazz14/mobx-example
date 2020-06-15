import { types, applySnapshot } from "mobx-state-tree";

const collection = types
  .model("User", {
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    active: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    loginUser: function (email, password) {
      const loggedUser = {
        id: "1",
        email: email,
        password: password,
        role: "admin",
        active: true,
      };
      applySnapshot(self, loggedUser);
      return loggedUser;
    },
  }))
  .views((self) => ({
    isActive() {
      return self.active ? "user is active" : "user is not active";
    },
  }));

export default collection;
