import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import  {useStudentContext}  from "../Student/StudentContext"

import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";




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

const TeacherList = () => {
  const {teachers} = useStudentContext();
  return (
   <>
   <Dashboard/>
   
   <TableContainer component={Paper}>
      <h1> Registered Teachers List Table.     <span><NavLink to='/teacher-regestration'><button style={{width:'75px',height:'40px',backgroundColor:'green',color:'white',border:'2px solid green'}}>ADD</button></NavLink></span></h1>
      <Table sx={{ minWidth: 700, }} aria-label="customized table">
        <TableHead>
          <TableRow>
       

            
            <StyledTableCell align="right"></StyledTableCell>
            
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            {/* <StyledTableCell align="right">Last Name</StyledTableCell> */}

            <StyledTableCell align="right">Email</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
        {teachers.map((e)=>{
                return(
                  <>
                   <StyledTableRow >

              <StyledTableCell ></StyledTableCell>
              <StyledTableCell align='right'>{e.name}</StyledTableCell>
              <StyledTableCell align='right'>{e.last}</StyledTableCell>
              {/* <StyledTableCell align='right'>{e.last}</StyledTableCell> */}

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
  )
}

export default TeacherList;