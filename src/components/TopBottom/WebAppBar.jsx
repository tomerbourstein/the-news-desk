import { Fragment, useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { getUserId } from "../../utils/firebase";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

import Logo from "../../assets/logo.png";
import AccountMenu from "../Personalization/AccountMenu";
import classes from "./WebAppBar.module.css";

const WebAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [initials, setInitials] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getNameInitials = (userData) => {
    const { firstName, lastName } = userData;
    const string = firstName + " " + lastName;
    let names = string.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  useEffect(() => {
    const dbRef = ref(getDatabase());
    const userId = getUserId();
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userInitials = getNameInitials(snapshot.val());
          setInitials(userInitials);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
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
            <IconButton disabled sx={{ p: 0 }}>
              <Avatar>{initials}</Avatar>
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

      <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default WebAppBar;
