import React from "react";
import { Box, Button } from "@mui/material";
import {
  StyledBox,
  StyledBoxRow,
  StyledSecondTextField,
  StyledTextField,
  StyledTypographyTitle,
  StyledSelect,
  StyledFormControl,
} from "../../styles/FormsDevicesStyles/FormsDevicesStyles";
import { useAppSelector, useAppDispatch } from "../../redux/store/hooks";
import { ApplicationState } from "../../interfaces/ApplicationState";
import useForm from "../../hooks/useForm/useForm";
import { saveNewDevices } from "../../redux/actions/devicesListAction";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RECEIVE_CREATION_STATUS } from "../../redux/reducers/devicesReducer";

export const NewDevicesForm = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const actualGuid = useAppSelector(
    (state: ApplicationState) => state.dev.guid
  );
  const user = useAppSelector((state: ApplicationState) => state.auth?.name);
  const iot = useAppSelector(
    (state: ApplicationState) => state.iot.iotHubsSelected
  );
  
  const responseGlobal = useAppSelector(
    (state: ApplicationState) => state.dev.creationStatus
  );

  const ownerCompany = useAppSelector((state: ApplicationState) => state.bus.ownersCompanyList);
  const orOperator = useAppSelector((state: ApplicationState) => state.bus.orOperator);
  const substation = useAppSelector((state: ApplicationState) => state.bus.substation);
  const tecnologies = useAppSelector((state: ApplicationState) => state.bus.tecnologies);

  const [errors, setErrors] = React.useState({ value: "", error: false });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({
      value: "El dispositivo con este nombre ya existe",
      error: true,
    });
    saveSubmitForm(false);
  };

  const creationValidate = () => {
    const status = responseGlobal.message.substr(91, 1);
    if (status === 1) {
      setOpen(false);
      navigate(
        `/DeviceDetails/${responseGlobal.message.substr(36, 36)} `
      );
      navigate(0);
    } else {
      setOpen(false);
      navigate("/devices");
    }
    setOpen(false);
  };

  const creationDate = new Date();

  const initialState = {
    name: "",
    resourceGroup: iot.resourceGroupName,
    ioTHubName: iot.ioTHubName,
    creationDate: creationDate.toISOString(),
    locationLat: "",
    locationLong: "",
    companyOwner: "",
    operatorOR: "",
    substation: "",
    lastValityUpdate: creationDate.toISOString(),
    guid: actualGuid,
    generationTechnology: "",
    declaredReportingFrequency: "",
    validity: false,
    created: creationDate.toISOString(),
    createdBy: user,
    lastUpdate: creationDate.toISOString(),
    lastUpdateBy: user,
  };

  const saveDevice = async () => {
    const res = await dispatch(saveNewDevices(values));
    if (!res.status) {
      dispatch(RECEIVE_CREATION_STATUS(res));
      handleClickOpen();
    } else {
     navigate("/devices");
     alert("Dispositivo Creado Exitosamente");
    }
  };

  const { handleChange, handleSubmit, values, saveSubmitForm } = useForm(
    initialState,
    saveDevice
  );

  const validate = () => {
    if (values.name.length > 0) {
      setErrors({ value: "", error: false });
    } else {
      setErrors({ value: "El campo nombre no puede estar vacio", error: true });
    }
  };

  const handleValidate = (e: any) => {
    handleChange(e);
    validate();
  };

  const handleSendData = (e: any) => {
    if (!errors.error && values.name !== "") {
      console.log("se oprime");
      handleSubmit(e);
    } else {
      alert("El Campo nombre es requerido");
      setErrors({ value: "El campo nombre no puede estar vacio", error: true });
    }
  };

  return (
    <StyledBox component="form">
      <StyledTypographyTitle>Nuevo Dispositivo</StyledTypographyTitle>
      <StyledBoxRow>
        <StyledTextField
          required
          error={errors.error}
          placeholder="Nombre del dispositivo"
          label="Nombre"
          variant="outlined"
          onChange={handleValidate}
          value={values.name}
          name="name"
          helperText={errors.value}
        />
        <StyledTextField
          placeholder="Fecha de creacion"
          label="Fecha de Creacion"
          type="date"
          variant="outlined"
          onChange={handleChange}
          value={values.creationDate.substr(0, 10)}
          name="creationDate"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledSecondTextField
          placeholder="Latitud"
          label="Ubicacion Lat"
          variant="outlined"
          onChange={handleChange}
          value={values.locationLat}
          name="locationLat"
        />
        <StyledSecondTextField
          placeholder="Longitud"
          label="Ubicacion Lon"
          variant="outlined"
          onChange={handleChange}
          value={values.locationLong}
          name="locationLong"
        />
        <StyledFormControl>
          <InputLabel>Compañia Propietaria</InputLabel>
          <StyledSelect
            label="Compañia Propietaria"
            placeholder=""
            onChange={handleChange}
            value={values.companyOwner}
            name="companyOwner"
          >
            {ownerCompany.map((item: any, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledFormControl>
          <InputLabel>Compañia OR</InputLabel>
          <StyledSelect
            label="Compañia OR"
            placeholder=""
            onChange={handleChange}
            value={values.operatorOR}
            name="operatorOR"
          >
            {orOperator.map((item: any, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Subestacion</InputLabel>
          <StyledSelect
            label="Subestación"
            placeholder=""
            onChange={handleChange}
            value={values.substation}
            name="substation"
          >
            {substation.map((item: any, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <StyledSecondTextField
          placeholder="Fecha de modificacion de vigencia"
          label="Fecha Vigencia"
          variant="outlined"
          type="date"
          onChange={handleChange}
          value={values.lastValityUpdate.substr(0, 10)}
          name="lastValityUpdate"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledSecondTextField
          disabled
          placeholder="GUID"
          label="GUID"
          variant="outlined"
          onChange={handleChange}
          value={values.guid}
          name="guid"
        />
        <StyledFormControl>
          <InputLabel>Tec Generación</InputLabel>
          <StyledSelect
            label="Tec Generación"
            placeholder=""
            onChange={handleChange}
            value={values.generationTechnology}
            name="generationTechnology"
          >
            {tecnologies.map((item: any, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <StyledSecondTextField
          placeholder="Frecuencia de reporte declarado"
          label="Frecuencua declarado"
          variant="outlined"
          onChange={handleChange}
          value={values.declaredReportingFrequency}
          name="declaredReportingFrequency"
        />
      </StyledBoxRow>
      <FormControl>
        <InputLabel>Vigencia</InputLabel>
        <Select
          value={values.validity}
          label="Vigencia"
          name="validity"
          onChange={handleChange}
        >
          <MenuItem value={true as any}>Activo</MenuItem>
          <MenuItem value={false as any}>Inactivo</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Button
          sx={{ color: "white" }}
          variant="contained"
          onClick={handleSendData}
        >
          Crear Dispositivo
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Crear Dispositivo con mismo nombre
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Esta seguro que desea crear un dispositivo con el mismo nombre? Si
            selecciona si, sera redirigido a la edicion para que realice la
            activacion del mismo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={creationValidate}>Si</Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
};
