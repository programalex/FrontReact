import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add'
import UpdateIcon from '@mui/icons-material/Update'
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
import {
  StyledTableCell,
  StyledTableRow,
  StyledTypography,
  StyledContainer,
  StyledContainerBox,
  StyledButton,
  StyledContainerButtons
} from "../../styles/Tables/GeneralTablesStyles";

function createData(name: string, state: string, ipaddres: string) {
  return { name, state, ipaddres };
}

const rows = [
  createData("msgprocessor-scada-prb", "Stopped", "1.1.1.1.1"),
  createData("msgprocessor-scada-3", "	Running", "1.1.1.1.1"),
  createData("msgprocessor-agc-v1", "Failed", "1.1.1.1.1"),
  createData("commchecker", "Running", "1.1.1.1.1")
];

export default function ServersList(props: { loading?: boolean }) {
  let navigate = useNavigate();
  const { loading =false} = props;
  return (
    <StyledContainerBox>
    <StyledContainer>
    <StyledTypography>
      Servidores
    </StyledTypography>
    <StyledContainerButtons
    >
      <StyledButton
        variant="contained"
      >
        <AddIcon />
        Nuevo
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={()=>navigate('/Servers')}
      >
        <UpdateIcon />
        Actualizar
      </StyledButton>
    </StyledContainerButtons>
  </StyledContainer>
  {loading ? (
        <Skeleton variant="rectangular" width="100%" height="300px">
          <div style={{ paddingTop: '57%', paddingBottom:'100px' }} />
        </Skeleton>
      ) : (
        <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700}}
        aria-label="customized table"
      >
        <TableHead >
          <TableRow>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Direccion IP</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.state}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ipaddres}
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
