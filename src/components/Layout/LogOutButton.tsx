import React from "react";
import { useMsal } from "@azure/msal-react";
import {
  StyledIconButton,
} from "../../styles/Layout/LayoutStyles";
import LogoutIcon from "@mui/icons-material/Logout";

function handleLogout(instance: any) {
  instance.logoutPopup().catch((e: any) => {
    console.error(e);
  });
}

export const LogOutButton = () => {
  const { instance } = useMsal();

  return (
      <StyledIconButton onClick={() => handleLogout(instance)}>
        <LogoutIcon />
      </StyledIconButton>
  );
};
