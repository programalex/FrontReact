import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import HubSelector from "./HubSelector";
import { UserProfile } from "./UserProfile";

function MenuAppBar() {
  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <img
          className="flex-none h-10 my-auto mx-6"
          src="/logo-xm.svg"
          alt="Logo XM"
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 2 }}
        ></Typography>
        <HubSelector />
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
}

export default MenuAppBar;
