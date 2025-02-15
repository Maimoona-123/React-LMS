import { Box, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import  {useStudentContext}  from "../Student/StudentContext"
import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";




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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}))

const TeacherList = () => {
const {teachers} = useStudentContext();
return (
 <Box sx={{border:"2px solid green", display:"flex", alignItems:"flex-start", height:"auto", paddingTop:"80px",paddingX:"20px"
 }}>
 <Dashboard/>
 
 <TableContainer component={Paper} >
 <div style={{ 
display: "flex", 
flexDirection: "row", 
justifyContent: "space-between", 
alignItems: "center", 
width: "100%", 
padding: "10px 20px"
}}>
<h1 >
  Registered Teachers List Table
</h1>
<NavLink to='/teacher-regestration'>
  <button style={{
    width: '75px', 
    height: '40px', 
    backgroundColor: 'purple',
    borderColor:"transparent",
    borderRadius:"20px",
    color: 'white', 
    border: '2px solid green',
    cursor: "pointer"
  }}>
    ADD
  </button>
</NavLink>
</div>

    <Table sx={{ minWidth: 700, }} aria-label="customized table">
      <TableHead >
        <TableRow >
     

          
          <StyledTableCell align="left">User Id</StyledTableCell>
          
          <StyledTableCell align="left">First Name</StyledTableCell>
          <StyledTableCell align="left">Last Name</StyledTableCell>
          {/* <StyledTableCell align="right">Last Name</StyledTableCell> */}

          <StyledTableCell align="left">Email</StyledTableCell>

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
 
  </Box>
)
}

export default TeacherList;