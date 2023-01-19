import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledButton } from "../../styles/Tables/GeneralTablesStyles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useForm from "../../hooks/useForm/useForm";
import {useAppDispatch } from '../../redux/store/hooks'
import { exportDevices } from "../../redux/actions/devicesListAction";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 240,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
    borderRadius:2
};

export default function ExportDevices() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch()

  let initialState = {
    type: "All",
  };

  const exportTypeDevices = () => {
  dispatch(exportDevices(values.type))
  handleClose()
  };

  const { handleChange, values } = useForm(
    initialState,
    exportTypeDevices
  );

  return (
    <div>
      <StyledButton variant="contained" onClick={handleOpen}>
        <CloudDownloadIcon/>
        Exportar
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Seleccione que dispositivos desea exportar:</Typography>
          <FormControl sx={{ width: "100%", marginTop: "8%" }}>
            <InputLabel>Tipos</InputLabel>
            <Select
              value={values.type}
              label="Tipos"
              name="type"
              onChange={handleChange}
            >
              <MenuItem value={"All"}>Todos</MenuItem>
              <MenuItem value={"Active"}>Activos</MenuItem>
              <MenuItem value={"Inactive"}>Inactivos</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{display:"flex", justifyContent:"center", marginTop:"7%"}}>
          <StyledButton variant="contained" onClick={exportTypeDevices}>
            Exportar
          </StyledButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
