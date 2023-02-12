import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import GoogleIcon from "../../assets/google-icon.png";
import Logo from "../../assets/logo.png";
import classes from "./Auth.module.css";

const Login = (props) => {
  const dispatch = useDispatch();

  const toggleAuthFormHandler = () => {
    dispatch(uiActions.toggleAuthForm());
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#eeeeee", width: 65, height: 65 }}>
        <img className={classes.logo} src={Logo} />
      </Avatar>
      <Typography component="h2" variant="h5">
        Login
      </Typography>

      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3.5, mb: 2 }}
        >
          Login
        </Button>
        <Button type="submit" fullWidth variant="outlined" sx={{ mb: 2 }}>
          <img className={classes.google} src={GoogleIcon} />
          Continue with Google
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2" onClick={toggleAuthFormHandler}>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
