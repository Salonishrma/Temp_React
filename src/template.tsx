import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Facebook">
        <IconButton sx={{ p: 2, color: 'white' }}>
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram">
        <IconButton sx={{ p: 2, color: 'white' }}>
          <InstagramIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="WhatsApp">
        <IconButton sx={{ p: 2, color: 'white' }}>
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Find Our Location">
            <IconButton sx={{ p: 2, color: 'white' }}>
              <LocationOnIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mx: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          MEDCARE
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Header />

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
              <Avatar alt="User Avatar" src="https://t3.ftcdn.net/jpg/05/28/97/80/240_F_528978063_hoXUak6fcFDiboHUVIbjxdAEK8sFMFZX.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <Typography textAlign="center">HOME</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">ABOUT</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">DEPARTMENT</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">DOCTORS</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">CONTACT</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;