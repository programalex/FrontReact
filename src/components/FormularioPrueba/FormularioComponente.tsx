import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  TextField,
  Typography,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TablePagination, 
  Paper
} from "@mui/material";
import Titulo from "../Titulo/Titulo";
import Boton from "../Boton/Boton";
import AddIcon from "@mui/icons-material/AddCircle";
import "@mui/icons-material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 250,
  bgcolor: "background.paper",
  boxShadow: 30,
  p: 6,
  borderRadius: 2,
};
export const FormularioComponente = () => {
  const columns = [
    { title: "Nombre", field: "name", sorting: false },
    {
      title: "Tipo Documento",
      field: "typeDocu",
      empyValue: () => <em>null</em>,
    },
    { title: "Numero Documento", field: "numDoc" },
    { title: "Nacimiento", field: "creationDate" },
    {
      title: "Sexo",
      field: "typeSexo",
      lookup: { Masculino: "M", Femenino: "F", Otros: "Otro" },
    },
    { title: "Edad", field: "edad" },
    {
      title: "Actividad",
      field: "typeActividad",
      lookup: { Actividad_1: "1", Actividad_2: "2", Actividad_3: "3" },
    },
    { title: "Seleccion", field: "tipoSelection" },
  ];
  const typeDoc = [{ tipo: "Cedula" }, { tipo: "Pasaporte" }];
  const typeSexo = [
    { tipo: "Masculino" },
    { tipo: "Femenino" },
    { tipo: "Otros" },
  ];
  const tipoSelection = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];
  const typeActividad = [
    { tipo: "Actividad_1" },
    { tipo: "Actividad_2" },
    { tipo: "Actividad_3" },
  ];
  //const tablas = [];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setvalues] = React.useState({
    name: "Alex",
    typeDocu: "Cedula",
    numDoc: "71376",
    creationDate: "01/01/2022",
    typeSexo: "Masculino",
    edad: "41",
    typeActividad: "1",
    tipoSelection: 5,
  });

  // const [tabla, setTable] = useState<any[]>([]);
  const [lista, setLista] = useState<any[]>([]);
  // const [tableData,setTableData]=useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setvalues({
      ...values,
      [name]: value,
    });
  };

  const validar = () => {
    if (values.tipoSelection < 4) {
      alert("debe ser el numero  de 4 o el numero 5");
      return;
    }
    setLista([...lista, values]);
    setvalues({
      name: "",
      typeDocu: "",
      numDoc: "",
      creationDate: "",
      typeSexo: "",
      edad: "",
      typeActividad: "",
      tipoSelection: 0,
    });
    // alert("es el numero" )
  };
  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    validar();

    // console.log(values);
    console.log(lista);
    // console.log(setLista);
    // console.log(tabla);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      component="form"
      onSubmit={handleForm}
      sx={{
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "3%",
        padding: "1% 1% 1% 15%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Titulo />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          gap: "3%",
        }}
      >
        <TextField
          required
          placeholder="Este es el Placeholder"
          label="Nombre"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Tipo Documento</InputLabel>
          <Select
            label="Tipo Documento"
            placeholder="este es el placeholder"
            name="typeDocu"
            value={values.typeDocu}
            onChange={handleChange}
          >
            {typeDoc.map((item: any, index: number) => (
              <MenuItem key={index} value={item.tipo}>
                {item.tipo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          placeholder="Este es el Placeholder"
          label="Numero Ducumento"
          variant="outlined"
          name="numDoc"
          value={values.numDoc}
          onChange={handleChange}
        />
        <TextField
          placeholder="Fecha"
          label="Fecha Nacimiento"
          type="date"
          variant="outlined"
          name="creationDate"
          value={values.creationDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          gap: "3%",
          padding: "1% 0%",
        }}
      >
        <TextField
          required
          type="number"
          variant="outlined"
          label="Edad"
          name="edad"
          value={values.edad}
          onChange={handleChange}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sexo</InputLabel>
          <Select
            label="Sexo"
            placeholder="este es el placeholder"
            name="typeSexo"
            value={values.typeSexo}
            onChange={handleChange}
          >
            {typeSexo.map((item: any, index: number) => (
              <MenuItem key={index} value={item.tipo}>
                {item.tipo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Seleccion Numero</InputLabel>
          <Select
            label="Seleccione"
            placeholder="este es el placeholder"
            name="tipoSelection"
            value={values.tipoSelection}
            onChange={handleChange}
          >
            {tipoSelection.map((item: any, index: number) => (
              <MenuItem key={index} value={item.number}>
                {item.number}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <Button variant="outlined" onClick={handleOpen}>
            <AddIcon /> Actividad
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography>Seleccione una Actividad:</Typography>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Seleccione Actividad</InputLabel>
                <Select
                  label="Actividad"
                  placeholder="este es el placeholder"
                  name="typeActividad"
                  value={values.typeActividad}
                  onChange={handleChange}
                >
                  {typeActividad.map((item: any, index: number) => (
                    <MenuItem key={index} value={item.tipo}>
                      {item.tipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Modal>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          padding: "1%",
        }}
      >
        <Boton />
      </Box>
      <Box  sx={{
          // height: "50%",
          with: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          // flexWrap: "wrap",
          // gap: "3%",
          padding: "0% 1% 0% 0%",
        }}>
          <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="center">Tipo Documento</TableCell>
                <TableCell align="center">Numero Documento</TableCell>
                <TableCell align="center">Nacimiento</TableCell>
                <TableCell align="center">Edad</TableCell>
                <TableCell align="center">Sexo</TableCell>
                <TableCell align="center">Seccion</TableCell>
                <TableCell align="right">Actividad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lista.map((item: any, index: number) => (
                <TableRow
                  key={(index = 1)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell >{item.name}</TableCell> 
                  <TableCell >{item.typeDocu}</TableCell>
                  <TableCell >{item.numDoc}</TableCell>
                  <TableCell >{item.creationDate}</TableCell>
                  <TableCell >{item.edad}</TableCell>
                  <TableCell >{item.typeSexo}</TableCell>                  
                  <TableCell >{item.tipoSelection}</TableCell>
                  <TableCell >{item.typeActividad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </TableContainer>
       
        <TablePagination
        rowsPerPageOptions={[3, 6, 9]}
        component="div"
        count={lista.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      
      </Box>

    
    </Box>
  );
};
