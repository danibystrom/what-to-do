import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              color: "black",
            }}
          >
            what to do
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                color: "black",
              }}
            >
              add do
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                color: "black",
              }}
            >
              old do's
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
