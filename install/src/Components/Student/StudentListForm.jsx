
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStudentContext } from './StudentContext';
import Dashboard from '../Dashboard/Dashboard';

import { NavLink } from 'react-router-dom';

  // export default function StudentListForm() {
  //   let {students} = useStudentContext()

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
  }
}))



export default function StudentListForm() {
  let {students} = useStudentContext()
  return (
    <>
    <Dashboard/>
    <TableContainer component={Paper}>
      <h1> Registered Students List Table.      <span><NavLink to='/student-registration'><button style={{width:'75px',height:'40px',backgroundColor:'green',color:'white',border:'2px solid green'}}>ADD</button></NavLink></span></h1>     
      <Table sx={{ minWidth: 700 ,}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Full Name</StyledTableCell>
            <StyledTableCell align="right">Student Email</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
          
              students.map((e)=>{
                return(
                  <>
                   <StyledTableRow >

              <StyledTableCell >{e.name}</StyledTableCell>
              <StyledTableCell align='right'>{e.last}</StyledTableCell>
              <StyledTableCell align='right'>{e.name}  {e.last}</StyledTableCell>
              <StyledTableCell align='right'>{e.email}</StyledTableCell>



                     

                   </StyledTableRow>
                  
                  </>
                )
                  
                
              })
            
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}




































// import {useStudentContext } from './StudentContext'


// function StudentListForm() {
//   const { students } = useStudentContext(); // Access the list of students from context

//   return (
//     <div>
//       <h2>Student List</h2>
//       {students.length === 0 ? (
//         <p>No students registered yet.</p>
//       ) : (
//         <ul>
            
//           {students.map((student, index) => {
//             return(
//                 <>
//                 <li key={index}>
//               {student.name} {student.last} 
//             </li>
//             <li>
//                 {student.email}
//             </li>
//             <li>{student.class}</li>
                
//                 </>
//             )
            
           
            
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default StudentListForm;