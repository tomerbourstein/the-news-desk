import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Signup from "./Signup";
import Login from "./Login";


const Auth = (props) => {
  return (
    <Container component="section" maxWidth="xs">
      <Typography component="h1" variant="h4" align="center">
        THE NEWS DESK
      </Typography>
      <Signup />
      <Login />
    </Container>
  );
};

export default Auth;
