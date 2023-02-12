import { useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  const authForm = useSelector((state) => state.ui.authForm);
  const authFormChoice = authForm ? <Signup /> : <Login />;
  return (
    <Container component="section" maxWidth="xs">
      <Typography component="h1" variant="h4" align="center">
        THE NEWS DESK
      </Typography>
      {authFormChoice}
    </Container>
  );
};

export default Auth;
