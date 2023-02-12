import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

import SunIcon from "../../assets/sun-icon.png";

const Weather = () => {
  return (
    <Box sx={{ backgroundColor: "#0078D4" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          py: 2,
          color: "#F7F7F7",
        }}
      >
        <img src={SunIcon} />

        <Box>
          <Typography>Tel Aviv-Yafo</Typography>
          <Typography>Tuesday 16:00</Typography>
          <Typography>Mostly sunny</Typography>
        </Box>

        <Typography sx={{ fontSize: 30 }}> 18°C</Typography>
      </Box>
    </Box>
  );
};

export default Weather;
