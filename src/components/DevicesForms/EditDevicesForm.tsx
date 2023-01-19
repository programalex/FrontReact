import React from 'react'
import { Box, Button } from '@mui/material'
import {
  StyledBox,
  StyledBoxRow,
  StyledSecondTextField,
  StyledTextField,
  StyledTypographyTitle,
  StyledSelect,
  StyledFormControl,
} from '../../styles/FormsDevicesStyles/FormsDevicesStyles'
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks'
import { ApplicationState } from '../../interfaces/ApplicationState'
import useForm from '../../hooks/useForm/useForm'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { editDevice } from '../../redux/actions/devicesListAction'
import { useNavigate } from "react-router-dom";
import DeleteModal from './DeleteModal'

export const EditDevicesForm = () => {

  const devicesSelected = useAppSelector((state: ApplicationState) => state.dev.deviceSelected)
  const user = useAppSelector((state: ApplicationState) => state.auth?.name);
  const iot = useAppSelector((state: ApplicationState) => state.iot.iotHubsSelected);
  const ownerCompany = useAppSelector((state: ApplicationState) => state.bus.ownersCompanyList);
  const orOperator = useAppSelector((state: ApplicationState) => state.bus.orOperator);
  const substation = useAppSelector((state: ApplicationState) => state.bus.substation);
  const tecnologies = useAppSelector((state: ApplicationState) => state.bus.tecnologies);

  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const [editState, setEditState] = React.useState(true)
  
  let creationDate = new Date();

 let initialState = {
    name: devicesSelected.name,
    resourceGroup: iot.resourceGroup,
    ioTHubName: iot.ioTHubName,
    creationDate: devicesSelected.creationDate,
    locationLat: devicesSelected.locationLat,
    locationLong: devicesSelected.locationLong,
    companyOwner: devicesSelected.companyOwner,
    operatorOR: devicesSelected.operatorOR,
    substation: devicesSelected.substation,
    lastValityUpdate: devicesSelected.lastValityUpdate,
    guid: devicesSelected.guid,
    generationTechnology: devicesSelected.generationTechnology,
    declaredReportingFrequency: devicesSelected.declaredReportingFrequency,
    validity: devicesSelected.validity,
    created: devicesSelected.created,
    createdBy: devicesSelected.user,
    lastUpdate: creationDate.toISOString(),
    lastUpdateBy: user,
  }

  const getDevice = () => {
    dispatch(editDevice(values.guid, values));
    navigate('/Devices');
  }

  const { handleChange, handleSubmit, values } = useForm(
    initialState,
    getDevice,
  )

  return (
    <StyledBox component="form">
      <Box sx={{ display: 'flex', width: '94%' }}>
        <StyledTypographyTitle>Detalles de {values.name}</StyledTypographyTitle>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '50px',
            width: '100%',
          }}
        >
           {editState && (
          <Button sx={{ color: 'white' }} variant="contained" onClick={()=>{setEditState(false)}}>
            Editar
          </Button>
           )}
        </Box>
      </Box>

      <StyledBoxRow>
        <StyledTextField
          disabled={editState}
          placeholder="Nombre del dispositivo"
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <StyledTextField
          disabled={editState}
          placeholder="Fecha de creacion"
          label="Fecha de Creacion"
          type="date"
          variant="outlined"
          name="creationDate"
          onChange={handleChange}
          value={values.creationDate.substr(0, 10)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledSecondTextField
          disabled={editState}
          placeholder="Latitud"
          label="Ubicacion Lat"
          variant="outlined"
          name="locationLat"
          onChange={handleChange}
          value={values.locationLat}
        />
        <StyledSecondTextField
          disabled={editState}
          placeholder="Longitud"
          label="Ubicacion Lon"
          variant="outlined"
          name="locationLong"
          onChange={handleChange}
          value={values.locationLong}
        />
        <StyledFormControl>
          <InputLabel>Compañia Propietaria</InputLabel>
          <StyledSelect
            disabled={editState}
            label="Compañia Propietaria"
            placeholder=""
            name="companyOwner"
            onChange={handleChange}
            value={values.companyOwner}
          >
            {ownerCompany.map((item: any, index: number) => (
              <MenuItem key= {index} value={item.name}>{item.name}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledFormControl>
          <InputLabel>Compañia OR</InputLabel>
          <StyledSelect
            disabled={editState}
            label="Compañia OR"
            placeholder=""
            name="operatorOR"
            onChange={handleChange}
            value={values.operatorOR}
          >
            {orOperator.map((item: any, index: number) => (
              <MenuItem key= {index} value={item.name}>{item.name}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Subestacion</InputLabel>
          <StyledSelect
            disabled={editState}
            label="Subestación"
            placeholder=""
            name="substation"
            onChange={handleChange}
            value={values.substation}
          >
            {substation.map((item: any, index: number) => (
              <MenuItem key= {index} value={item.name}>{item.name}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
        <StyledSecondTextField
          disabled
          placeholder="Fecha de modificacion de vigencia"
          label="Fecha Vigencia"
          variant="outlined"
          type="date"
          name="lastValityUpdate"
          onChange={handleChange}
          value={values.lastValityUpdate.substr(0, 10)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </StyledBoxRow>
      <StyledBoxRow>
        <StyledSecondTextField
          disabled={editState}
          required
          placeholder="GUID"
          label="GUID"
          variant="outlined"
          name="guid"
          onChange={handleChange}
          value={values.guid}
        />
        <StyledFormControl>
          <InputLabel>Tec Generación</InputLabel>
          <StyledSelect
            disabled={editState}
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
          disabled={editState}
          placeholder="Frecuencia de reporte declarado"
          label="Frecuencia declarada"
          variant="outlined"
          name="declaredReportingFrequency"
          onChange={handleChange}
          value={values.declaredReportingFrequency}
        />
      </StyledBoxRow>
      <FormControl>
        <InputLabel>Vigencia</InputLabel>
        <Select
          disabled={editState}
          onChange={handleChange}
          value={values.validity}
          label="Vigencia"
          name="validity"
        >
          <MenuItem value={true as any}>Activo</MenuItem>
          <MenuItem value={false as any}>Inactivo</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          width: '94%',
          justifyContent: 'end',
          gap: '30px',
        }}
      >
        {!editState && (
          <Button sx={{ color: 'white' }} variant="contained" onClick={handleSubmit}>
            Guardar
          </Button>
        )}
         {!editState && (
          <DeleteModal/>
        )}
        {!editState && (
          <Button sx={{ color: 'white' }} variant="contained" onClick={()=>{setEditState(true)}}>
            Cancelar
          </Button>
        )}
      </Box>
    </StyledBox>
  )
}
