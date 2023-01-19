import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Typography,Box } from "@mui/material";
import { typographyClasses } from "@mui/material/Typography";
import { tableRowClasses} from "@mui/material/TableRow";
import { buttonClasses } from "@mui/material/Button";
import { Button } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    borderBottom: `solid ${theme.palette.primary.main}`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "theme.palette.action.hover",
    
  },

  [`&.${tableRowClasses.root}`]: {
    cursor:"pointer"
  },
  [`&.${tableRowClasses.root}:hover`]: {
    backgroundColor: "#E9E9E9",
  },

  "&:last-child td, &:last-child th": {
    border: 100,
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    fontWeight: "bolder",
    fontSize: 30,
    alignSelf: "center",
    color: "#1F2937",
  },
}));

export const StyledContainer = styled(Box, {})({
  height: "8rem",
  display: "flex"
});

export const StyledContainerBox = styled(Box, {})({
  paddingBottom: "30px",
});

export const StyledContainerMainBox = styled(Box, {})({
  backgroundColor: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
});

export const StyledContainerButtons = styled(Box, {})({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "50px",
    width: "100%",
});

export const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    color: "white",
    display: "flex",
    gap: "10px",
  },
}));
