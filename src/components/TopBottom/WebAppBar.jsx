// import * as React from "react";
import { Fragment, useState } from "react";
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
import AccountMenu from "../Personalization/AccountMenu";
const WebAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
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
            <IconButton sx={{ p: 0 }}>
              <Avatar>TB</Avatar>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton
                color="#D8DEE0"
                sx={{ p: 0 }}
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleClose}/>
    </Fragment>
  );
};

export default WebAppBar;
