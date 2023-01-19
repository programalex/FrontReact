import { Container, Typography } from "@mui/material";
import { typographyClasses } from "@mui/material/Typography";
import { containerClasses } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    fontWeight: "bolder",
    fontSize: 20,
    alignSelf: "center",
    color: "#1F2937",
    padding: "10px",
  },
}));

export const StyledContainerBox = styled(Container)(({ theme }) => ({
  [`&.${containerClasses.root}`]: {
    width: "580px",
    height: "350px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px gray",
    marginLeft: "0px",
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${containerClasses.root}`]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));
