import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormHelperText,
  Typography,
} from "@mui/material";
import React from "react";
import {
  StyledBoxRow,
  StyledTypographyTitle,
} from "../../styles/FormsDevicesStyles/FormsDevicesStyles";
import InputLabel from "@mui/material/InputLabel";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import useForm from '../../hooks/useForm/useForm'
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks'
import { ApplicationState } from '../../interfaces/ApplicationState'
import { useNavigate } from "react-router-dom";
import { editAzureDevice } from "../../redux/actions/devicesListAction";
import {Buffer} from 'buffer';

export const PasswordForm = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate()

  const [pasWord1State, setpasWord1State] = React.useState({state:false, value:"password"});
  const [pasWord2State, setpasWord2State] = React.useState({state:false, value:"password"});
  const [primaryErrors, setPrimaryErrors] = React.useState({ primaryValue:"", primaryError:false});
  const [secondaryErrors, setSecondaryErrors] = React.useState({secondaryValue:"", secondaryError:false });
  const [editState, setEditState] = React.useState(true);

  const devicesSelected = useAppSelector((state: ApplicationState) => state.dev.deviceSelected)
  const azureDevice = useAppSelector((state: ApplicationState) => state.dev.azureDevice);

  let initialState = {
    primaryKey: Buffer.from(azureDevice.authentication.symmetricKey.primaryKey, 'base64') ,
    secondaryKey: Buffer.from(azureDevice.authentication.symmetricKey.secondaryKey, 'base64')
  }

  const editDevice = () => {
    dispatch(editAzureDevice(devicesSelected.guid, values));
    navigate('/Devices');
  };

const { handleChange, handleSubmit,values} = useForm(
  initialState,
  editDevice,
)


const validate = () => {
  if(values.primaryKey.length > 14){
   setPrimaryErrors({primaryValue:"",  primaryError:false})
    } else {
    setPrimaryErrors({primaryValue:"Su contraseña debe tener Entre 16 y 64 caracteres", primaryError:true})
    }
    if(values.secondaryKey.length > 14){
      setSecondaryErrors({secondaryValue:"",  secondaryError:false})
       } else {
       setSecondaryErrors({secondaryValue:"Su contraseña debe tener Entre 16 y 64 caracteres", secondaryError:true})
  }

  }
  const handleValidate = (e:any) => {
    handleChange(e);
    validate();
  }

  const handleSendData = (e:any) => {
    if(!primaryErrors.primaryError || !secondaryErrors.secondaryError){
      handleSubmit(e);
    }  
    
  }

  return (
    <Box
      sx={{
        height: "400px",
        width: "60%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "4%",
        padding: "2% 0% 4% 4%",
        borderRadius: 2,
        marginTop: "2%",
      }}
      component="form"
      noValidate
    >
      <Box sx={{ display: "flex", width: "94%" }}>
        <StyledTypographyTitle>Editar Claves</StyledTypographyTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "50px",
            width: "100%",
          }}
        >
          {editState && (
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => {
                setEditState(false);
              }}
            >
              Editar
            </Button>
          )}
        </Box>
      </Box>

      <StyledBoxRow>
        <FormControl variant="outlined" sx={{ width: "94%" }}>
          <InputLabel error ={primaryErrors.primaryError} htmlFor="outlined-adornment-password">
            Contraseña Primaria
          </InputLabel>
          <OutlinedInput
           error ={primaryErrors.primaryError}
            disabled={editState}
            type={pasWord1State.value }
            value={values.primaryKey}
            onChange={handleValidate}
            name="primaryKey"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                         onClick={()=>{setpasWord1State({state:true, value:"text"})}}
                         onMouseDown={()=>{setpasWord1State({state:false, value:"password"})}}
                >
                  {pasWord1State.state ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña Primaria"
          />
           <FormHelperText error ={primaryErrors.primaryError}>{primaryErrors.primaryValue}</FormHelperText>
        </FormControl>
      </StyledBoxRow>
      <StyledBoxRow>
        <FormControl variant="outlined" sx={{ width: "94%" }}>
          <InputLabel error ={secondaryErrors.secondaryError} htmlFor="outlined-adornment-password">
          Contraseña Secundaria
          </InputLabel>
          <OutlinedInput
            error ={secondaryErrors.secondaryError}
            disabled={editState}
            type={pasWord2State.value}
            value={values.secondaryKey}
            onChange={handleValidate}
            name="secondaryKey"
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                 onClick={()=>{setpasWord2State({state:true, value:"text"})}}
                 onMouseDown={()=>{setpasWord2State({state:false, value:"password"})}}
                >
                  {pasWord2State.state ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña Secundaria"
          />
          <FormHelperText error ={secondaryErrors.secondaryError}>{secondaryErrors.secondaryValue}</FormHelperText>
        </FormControl>
      </StyledBoxRow>

      <Box
        sx={{
          display: "flex",
          width: "94%",
          justifyContent: "end",
          gap: "30px",
          height:"35px"
        }}
      >
        {!editState && (
          <Box sx={{display:"flex", gap:"20px"}}>
          <Button sx={{ color: "white" }} variant="contained" onClick={handleSendData}>
            Guardar
          </Button> 
          <Button
            sx={{ color: "white" }}
            variant="contained"
            onClick={() => {
              setEditState(true);
            }}
          >
            Cancelar
          </Button>
          </Box>
        )}
      </Box>
      <Typography color={"#bbb"}>Las claves seran codificadas a Base64</Typography>
    </Box>
  );
};
