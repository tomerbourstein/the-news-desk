import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Personalization = (props) => {
  return (
    <Menu
      sx={{ width: 320, maxWidth: "100%" }}
      anchorEl={props.anchorPersonal}
      id="account-selections"
      open={props.openPersonal}
      onClose={props.handleClosePersonal}
      onClick={props.handleClosePersonal}
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
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <Chip>sports</Chip>
      <Chip>music</Chip>
      <Chip>politics</Chip>
      <Chip>celebrities</Chip>

      <Divider />
      <Chip>sports</Chip>
      <Chip>music</Chip>
      <Chip>politics</Chip>
      <Chip>celebrities</Chip>
    </Menu>
  );
};

export default Personalization;
