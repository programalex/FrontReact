import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTypography,
  StyledContainer,
  StyledContainerBox,
} from "../../styles/Tables/GeneralTablesStyles";

function createData(
  user: string,
  modul: string,
  action: string,
  description: string,
  date: string
) {
  return { user, modul, action, description, date };
}

const rows = [
  createData(
    "Juan Perez",
    "Servidores 104",
    "consultar",
    "Consulta todos los servidores 104",
    "	2022-10-05T09:06:42.2251092-05:00"
  ),
];

export default function AuditLogsList(props: { loading?: boolean }) {
  const { loading = false } = props;
  return (
    <StyledContainerBox>
      <StyledContainer>
        <StyledTypography>Log De Auditoria</StyledTypography>
      </StyledContainer>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height="300px">
          <div style={{ paddingTop: "57%", paddingBottom: "100px" }} />
        </Skeleton>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Usuario</StyledTableCell>
                <StyledTableCell align="center">Modulo</StyledTableCell>
                <StyledTableCell align="center">Accion</StyledTableCell>
                <StyledTableCell align="center">Descripcion</StyledTableCell>
                <StyledTableCell align="right">Fecha</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.user}>
                  <StyledTableCell align="left">{row.user}</StyledTableCell>
                  <StyledTableCell align="center">{row.modul}</StyledTableCell>
                  <StyledTableCell align="center">{row.action}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </StyledContainerBox>
  );
}
