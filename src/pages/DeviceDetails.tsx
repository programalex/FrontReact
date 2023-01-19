import { Alert, Box, LinearProgress } from "@mui/material";
import React from "react";
import { EditDevicesForm } from "../components/DevicesForms/EditDevicesForm";
import { PasswordForm } from "../components/DevicesForms/PasswordsForm";
import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import { ApplicationState } from "../interfaces/ApplicationState";
import { useParams } from "react-router-dom";
import {
  getAzureDeviceById,
  getDeviceById,
} from "../redux/actions/devicesListAction";
import { LastActivity } from "../components/DevicesForms/LastActivity";

export const DeviceDetails = () => {
  const devicesSelected = useAppSelector(
    (state: ApplicationState) => state.dev.deviceSelected
  );
  const azureDevice = useAppSelector(
    (state: ApplicationState) => state.dev.azureDevice
  );

  const accessToken = useAppSelector(
    (state: ApplicationState) => state.auth?.accessToken
  );

  let { guid } = useParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {

    dispatch(getDeviceById(guid));
    dispatch(getAzureDeviceById(guid));
  }, [guid, accessToken, dispatch ]);

  return guid === devicesSelected.guid ? (
    <Box>
      <LastActivity/>
      <EditDevicesForm />
      {devicesSelected.validity && azureDevice.id === guid ? (
        <PasswordForm />
      ) : (
        <Alert sx={{marginTop:"2%"}} severity="warning">
          ¡El dispositivo debe estar activo si desea cambiar o visualizar las claves!
        </Alert>
      )}
    </Box>
  ) : <LinearProgress/>
  ;
};
