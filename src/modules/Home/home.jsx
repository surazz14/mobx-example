import React from "react";
import { inject, observer } from "mobx-react";

function Home(props) {
  return (
    <>
      <div>status:{props.user.isActive()}</div>
      <div>email:{props?.user?.email}</div>
      <div>password:{props?.user?.password}</div>
      <div>role:{props?.user?.role}</div>
    </>
  );
}

export default inject("user")(observer(Home));
