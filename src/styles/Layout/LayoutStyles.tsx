import { styled } from "@mui/material/styles";
import { Typography,Box, IconButton} from "@mui/material";
import { typographyClasses } from "@mui/material/Typography";
import { iconButtonClasses } from "@mui/material/IconButton";

export const StyledContainerBox = styled(Box, {})({
    display: "flex" 
});

export const StyledBox = styled(Box, {})({
    marginLeft: "12px" 
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
    [`&.${typographyClasses.root}`]: {
        fontSize: "12px", color: '#9ca3af' 
    },
  }));

  export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    [`&.${iconButtonClasses.root}`]: {
        color: 'white', marginLeft:'1rem'
    },
  }));