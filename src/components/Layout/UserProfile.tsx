import {
  Avatar,
  Typography,
} from "@mui/material";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { useAppSelector } from "../../redux/store/hooks";
import { StyledContainerBox, StyledBox, StyledTypography} from "../../styles/Layout/LayoutStyles";
import { LogOutButton } from './LogOutButton';

export const UserProfile = () => {
  const name = useAppSelector((state: ApplicationState) => state.auth?.name);
  const userName = useAppSelector((state: ApplicationState) => state.auth?.userName);
  const profilePicture = useAppSelector((state: ApplicationState) => state.auth?.profilePicture);
  
  return (
    <StyledContainerBox>
      <Avatar alt={name} src={profilePicture} />
      <StyledBox>
        <Typography>{name} </Typography>
        <StyledTypography>
          {userName}
        </StyledTypography>
      </StyledBox>
    <LogOutButton/>
    </StyledContainerBox>
  );
};
