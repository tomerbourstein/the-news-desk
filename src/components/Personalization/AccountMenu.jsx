import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Logout from "@mui/icons-material/Logout";
import Personalization from "./Personalization";

const AccountMenu = (props) => {
  const [anchorPersonal, setAnchorPersonal] = useState(null);
  const openPersonal = Boolean(anchorPersonal);
  const dispatch = useDispatch();

  const handleClickPersonal = (event) => {
    setAnchorPersonal(event.currentTarget);
  };

  const handleClosePersonal = () => {
    setAnchorPersonal(null);
  };

  const handleClickLogout = () => {
    dispatch(uiActions.setLoadingState(true));

    setTimeout(() => {
      dispatch(uiActions.logout());
    }, 2000);
  };

  return (
    <Fragment>
      <Menu
        anchorEl={props.anchorEl}
        id="account-menu"
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClickPersonal}
          aria-controls={openPersonal ? "account-selections" : undefined}
          aria-haspopup="true"
          aria-expanded={openPersonal ? "true" : undefined}
        >
          <ListItemIcon>
            <ToggleOnIcon fontSize="small" />
          </ListItemIcon>
          Selections
        </MenuItem>
        <MenuItem onClick={handleClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Personalization
        anchorPersonal={anchorPersonal}
        openPersonal={openPersonal}
        handleClosePersonal={handleClosePersonal}
      />
    </Fragment>
  );
};

export default AccountMenu;
