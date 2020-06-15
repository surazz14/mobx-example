import React, { useState } from "react";
import { inject } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import App from "../../baseApp";
import Button from "@material-ui/core/Button";
// import useValidator from '../../common/hooks/useValidator'

// css parts
const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: "50%",
    padding: "7%",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  forgetPasswordLink: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#4cbac0",
    fontWeight: 500,
    fontSize: "large",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Login(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  function handleSubmit() {
    const { user } = props;
    user.loginUser(email, password);
    props.history.push("/home");

    // try {
    //   await user.loginUser(email, password);
    //   props.history.push("/home");
    // } catch (error) {
    //   App.utils.handleError(error);
    // }
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box display="flex" className={classes.login} flexDirection="column">
          <Box mx="auto" bgcolor="secondary" margin={2} clone>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Typography component="h1" variant="h5" align="center">
            Login
          </Typography>
          <TextField
            label="Email address"
            id="email"
            name="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(event) => {
              const { value } = event.target;
              setEmail(value);
            }}
          />
          {/* <Typography color="error">{validator.message('email', email, 'required|email')}</Typography> */}
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={password}
            variant="outlined"
            margin="normal"
            onChange={(event) => {
              const { value } = event.target;
              setPassword(value);
            }}
          />
          <div className={classes.forgetPasswordLink}>Forget Password</div>
          {/* <Typography color="error">{validator.message('password', password, 'required')}</Typography> */}
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default inject("user")(Login);
