
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dashboard from '../Dashboard/Dashboard';
import { useStudentContext } from '../Student/StudentContext';
import { NavLink } from 'react-router-dom';




 function ClassList() {
const {Classform} =   useStudentContext();

  return (
    <>
    <Dashboard/>
    <TableContainer component={Paper}>
        <h1>Class List.   <span><NavLink to='/classform'><button style={{width:'75px',height:'40px',backgroundColor:'green',color:'white',border:'2px solid green'}}>ADD</button></NavLink></span></h1>
      <Table style={{ minWidth: 650 ,}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow  >
            <TableCell></TableCell>
            <TableCell align="right" style={{fontSize:'1rem',fontWeight:'bold'}}>Student Name</TableCell>
            <TableCell align="right"  style={{fontSize:'1rem',fontWeight:'bold'}}>Last Name</TableCell>
            <TableCell align="right"  style={{fontSize:'1rem',fontWeight:'bold'}}>Email</TableCell>
            <TableCell align="right"  style={{fontSize:'1rem',fontWeight:'bold'}}>Qualification</TableCell>
            <TableCell align="right"  style={{fontSize:'1rem',fontWeight:'bold'}}>Phone</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Classform.map((row) => (
            <TableRow
              key={row.studentName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right" >{row.studentName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.studentEmail}</TableCell>
              <TableCell align="right">{row.qualification}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default ClassList