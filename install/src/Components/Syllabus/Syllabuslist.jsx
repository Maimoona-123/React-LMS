
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStudentContext } from '../Student/StudentContext';
import Dashboard from '../Dashboard/Dashboard';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



 function Syllabuslist() {
    const {syllabus} = useStudentContext()
  return (
    <>
    <Dashboard/>
    <h1>Syllabus List.    <span><NavLink to='/syllabusform'><button style={{width:'75px',height:'40px',backgroundColor:'green',color:'white',border:'2px solid green'}}>ADD</button></NavLink></span></h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="right">Subject Name</StyledTableCell>
            <StyledTableCell align="right">Class</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {syllabus.map((row) => (
            <StyledTableRow key={row.name}>
              
              <StyledTableCell align="right">{row.syllabusname}</StyledTableCell>
              <StyledTableCell align="right">{row.syllabusclass}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default Syllabuslist;