import { Box, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { useStudentContext } from "../Student/StudentContext";
import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

// Styled table cell and row
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "purple",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));

const ClassList = () => {
  const { students } = useStudentContext();  // Assuming the context holds 'students' now.

  return (
    <Box sx={{ border: "2px solid purple", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100vh", paddingTop: "80px", paddingX: "20px" }}>
      <Dashboard />
      
      <TableContainer component={Paper} sx={{ maxHeight: "70vh", overflowY: "auto", width: "100%" }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 20px"
        }}>
          <h1>Register Teacher List</h1>
          <NavLink to='/student-registration'>
            <button style={{
              width: '75px',
              height: '40px',
              backgroundColor: 'purple',
              borderColor: "transparent",
              borderRadius: "20px",
              color: 'white',
              border: '2px solid green',
              cursor: "pointer"
            }}>
              ADD
            </button>
          </NavLink>
        </div>

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"> ID</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {students && students.map((student, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="left">{student.id}</StyledTableCell>
                <StyledTableCell align="left">{student.firstName}</StyledTableCell>
                <StyledTableCell align="left">{student.lastName}</StyledTableCell>
                <StyledTableCell align="left">{student.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClassList;
