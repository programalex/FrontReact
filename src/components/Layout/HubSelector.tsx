import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { RECEIVE_IOTHUBSSELECTED } from "../../redux/reducers/iotHubReducer";
import { useAppSelector, useAppDispatch } from "../../redux/store/hooks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Skeleton } from "@mui/material";

export default function HubSelector() {
  const dispatch = useAppDispatch();
  const iotHubsList = useAppSelector(
    (state: ApplicationState) => state.iot?.iotHubsList
  );
  const iotHubsSelected = useAppSelector(
    (state: ApplicationState) => state.iot?.iotHubsSelected
  );
  const loading = useAppSelector(
    (state: ApplicationState) => state.iot?.isLoading
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIotHubsSelected = (iotHubsSelected: any) => {
    dispatch(RECEIVE_IOTHUBSSELECTED(iotHubsSelected));
  };

  return (
    <div>
      {loading ? (
        <Skeleton animation="wave" width={150} height={50} />
      ) : (
        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: "transparent",
            ".css-83ijpv-MuiTypography-root": {
              color: "white",
            },
          }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText secondary={iotHubsSelected.ioTHubName} />
            {open ? (
              <KeyboardArrowUpIcon/>
            ) : (
              <KeyboardArrowDownIcon/>
            )}
          </ListItem>
        </List>
      )}
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {iotHubsList.map((item: any, index: number) => (
          <MenuItem
            key={item.id}
            selected={index === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleIotHubsSelected(item);
            }}
            sx={{ fontSize: "14px", width: "132px" }}
          >
            {item.ioTHubName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
