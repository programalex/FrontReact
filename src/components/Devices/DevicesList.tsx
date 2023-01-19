import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SensorsIcon from "@mui/icons-material/Sensors";
import SensorsOffIcon from "@mui/icons-material/SensorsOff";
import UpdateIcon from "@mui/icons-material/Update";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTypography,
  StyledContainer,
  StyledContainerBox,
  StyledButton,
  StyledContainerButtons,
} from "../../styles/Tables/GeneralTablesStyles";
import { useAppSelector, useAppDispatch } from "../../redux/store/hooks";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { getDevicesList } from "../../redux/actions/devicesListAction";
import AddIcon from "@mui/icons-material/Add";
import ExportDevices from "./ExportDevices";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import moment from "moment";

export default function DevicesList(props: { loading?: boolean }) {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const iotHubsSelected = useAppSelector(
    (state: ApplicationState) => state.iot?.iotHubsSelected
  );
  const devicesList = useAppSelector(
    (state: ApplicationState) => state.dev.devicesList
  );
  const isLoading = useAppSelector(
    (state: ApplicationState) => state.dev.isLoading
  );

  const redirectionDetails = (guid: any) => {
    navigate(`/DeviceDetails/${guid}`);
  };

  const validateDate = (date:any) => {
   if(date ==="01/01/0001 00:00:00"){
    return "--------"
   }else if( date === null){
    return "--------"
   }else{
    return  moment(date).fromNow();
   }

  };

  React.useEffect(() => {
    if (!iotHubsSelected) return;
    dispatch(getDevicesList());
  }, [iotHubsSelected, dispatch]);

  return (
    <StyledContainerBox>
      <StyledContainer>
        <StyledTypography>Dispositivos</StyledTypography>
        <StyledContainerButtons>
          <StyledButton
            variant="contained"
            onClick={() => navigate("/NewDevice")}
          >
            <AddIcon />
            Nuevo
          </StyledButton>

          <StyledButton variant="contained" onClick={() => navigate(0)}>
            <UpdateIcon />
            Actualizar
          </StyledButton>
          <StyledButton variant="contained">
            <CloudUploadIcon />
            Importar
          </StyledButton>
          <ExportDevices />
        </StyledContainerButtons>
      </StyledContainer>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height="100%">
          <div style={{ paddingTop: "57%", paddingBottom: "100px" }} />
        </Skeleton>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Nombre</StyledTableCell>
                <StyledTableCell align="center">Estado</StyledTableCell>
                <StyledTableCell align="center">
                  Ultima Actividad
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {devicesList.map((device: any, index: number) => (
                <StyledTableRow
                  key={index}
                  onClick={() => {
                    redirectionDetails(device.guid);
                  }}
                >
                  <StyledTableCell align="left">{device.name}</StyledTableCell>
                  {device.validity ? (
                    <StyledTableCell align="center">
                      <SensorsIcon />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="center">
                      <SensorsOffIcon />
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="center">
                    {validateDate(device.lastActivity)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </StyledContainerBox>
  );
}
