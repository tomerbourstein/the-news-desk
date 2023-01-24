import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ top: "auto", bottom: 0 }}
    >
      <Divider variant="middle" sx={{ ml: 4, mr: 4 }} />
      <Toolbar
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          py: 2,
          justifyContent: { md: "space-evenly" },
        }}
      >
        <Typography sx={{ fontSize: 16, textAlign: "center" }}>
          "A place for everything, and everything in its place." Benjamin
          Franklin
        </Typography>

        <Box
          color="#B8B8B8"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { md: 3 },
          }}
        >
          <Typography sx={{ width: 150, fontSize: 10 }}>
            Built with React.JS and MUI Articles from NewsAPI.org
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ p: 0.5, color: "#B8B8B8" }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ p: 0.5, color: "#B8B8B8" }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ p: 0.5, color: "#B8B8B8" }}>
              <LinkedInIcon />
            </IconButton>

            <IconButton sx={{ p: 0.5, color: "#B8B8B8" }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={{ fontSize: 8, color: "#B8B8B8" }}>
          copyrights © tomer.bourstein@gmail.com
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
