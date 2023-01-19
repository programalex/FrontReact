import { styled } from "@mui/material/styles";
import { textFieldClasses} from "@mui/material/TextField";
import { Box, TextField, Select, FormControl } from '@mui/material';
import { Typography} from "@mui/material";
import { typographyClasses } from "@mui/material/Typography";
import { formControlClasses } from "@mui/material/FormControl";


export const StyledBox = styled(Box, {})({
    height: "570px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "4%",
    padding: "2% 0% 4% 4%",
    borderRadius: 10,
  });

  export const GnomoBox = styled(Box, {})({
    height: "300px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "2%",
    padding: "5% 5% 4% 4%",
    borderRadius: 50,
  });

  export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
    [`&.${typographyClasses.root}`]: {
        fontWeight: "bolder",
        fontSize: 30,
        alignSelf: "center",
        color: "#1F2937",
    },
  }));

  
export const StyledBoxRow = styled(Box, {})({
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    gap: "2%",
  });

  export const GnomoBoxRow = styled(Box, {})({
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    gap: "5%",
  });

  export const StyledTextField = styled(TextField)(({ theme }) => ({
    [`&.${textFieldClasses.root}`]: {
        width: "46%" 
    },
  }));

  export const StyledSecondTextField = styled(TextField)(({ theme }) => ({
    [`&.${textFieldClasses.root}`]: {
        width: "30%"
    },
  }));


  export const StyledSelect = styled(Select)(({ theme }) => ({
    width:"100%",
  }));

  export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    [`&.${formControlClasses.root}`]: {
        width: "30%",
    },
  }));

  export const StyledConexionField = styled(TextField)(({ theme }) => ({
    [`&.${textFieldClasses.root}`]: {
        width: "94%" 
    },
  }));

  
  
  