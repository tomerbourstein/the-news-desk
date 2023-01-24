import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

import Logo from "../../assets/logo.png";

import classes from "./WebAppBar.module.css";
const WebAppBar = () => {
  return (
    <AppBar color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img className={classes.logo} src={Logo} />
            <Typography component="h1" variant="h6" noWrap sx={{ pl: 1 }}>
              THE NEWS DESK
            </Typography>
          </Box>
          <Box>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar>TB</Avatar>
              </IconButton>
            </Tooltip>
            <IconButton color="#D8DEE0" sx={{ p: 0 }}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default WebAppBar;
