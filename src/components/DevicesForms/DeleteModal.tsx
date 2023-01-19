import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks'
import { ApplicationState } from '../../interfaces/ApplicationState'
import { deleteDevice } from '../../redux/actions/devicesListAction';
import { useNavigate } from "react-router-dom";

export default function DeleteModal() {

  const devicesSelected = useAppSelector((state: ApplicationState) => state.dev.deviceSelected)
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendData = ()=>{
   dispatch(deleteDevice(devicesSelected.guid));
   handleClose();
   navigate('/Devices');
  }

  return (
    <div>
      <Button sx={{ color: 'white' }} variant="contained" onClick={handleClickOpen}>
            Eliminar
          </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Eliminar el dispositivo
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Al eliminar este dispositivo, sera inactivado y a su vez 
            eliminado como dispositivo fisico ¿Esta seguro de realizar esta accion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSendData} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}