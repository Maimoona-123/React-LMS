import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { useStudentContext } from "../Student/StudentContext"

import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";


const Classform = () => {
  const {addClass} = useStudentContext();
  const [studentName, setStudentName] = useState('');
    const [lastName, setlastName] = useState('');
    const [studentEmail, setstudentEmail] = useState('');
    const [studentClass, setstudentclass] = useState('');
   const [phone,setphone] = useState('')  
   const [qualification,setqualification] = useState('')
   const [birth , setbirth] = useState('')
   

    const handleSubmit = (event)=>{
        event.preventDefault();

      
      const newclass = {
        studentName : studentName,
        lastName : lastName,
        studentEmail : studentEmail,
        phone : phone,
        studentClass:studentClass,
        qualification : qualification,
        birth : birth
      }
      addClass(newclass)
      setStudentName('')
      setlastName('')
      setstudentEmail('')
      setstudentclass('')
      setqualification('')
      setphone('')
      setbirth('')


    }


  return (
   <>
   <Dashboard/>
   <form onSubmit={handleSubmit} >
    <div>
        <h1> Student Registration form (class)</h1>
    </div>


    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>

    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Firstname" id="fullWidth" required
      type="text"
      value={studentName}
       onChange={((e) => setStudentName(e.target.value))}
      
      
      />
    </Box>
    </div>
    <br />
    <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Lastname" id="fullWidth" required
     type='text'
     value={lastName}
     onChange={((e) => setlastName(e.target.value))}
    
      
      />
    </Box>
  </div>

  <br />
    <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Email" id="fullWidth" required type='email'
       value={studentEmail}
       onChange={((e) => setstudentEmail(e.target.value))}
     
      
      />
    </Box>
  </div>

  <br />
    <br />

  <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Phone" id="fullWidth" required
     type='text'
     value={phone}
     onChange={((e) => setphone(e.target.value))}
    
      
      />
    </Box>
  </div>
  <br />
  <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Date of Birth" id="fullWidth" required
        value={birth}
        onChange={((e) => setbirth(e.target.value))}
      
      
      
      />
    </Box>
  </div>
  <br />
  <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Quallification" id="fullWidth" required
        value={qualification}
        onChange={((e) => setqualification(e.target.value))}
      
      
      
      />
    </Box>
  </div>
  <br />
  <br />
  <FormControl style={{marginRight:'400px'}}>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
  <br />
  <br />
  <Button  type='submit'  fullWidth style={{backgroundColor:'green',color:'white',width:'500%'}}>Register</Button>
  
</FormControl>


</form>
 
    
   
   </>
  )
}

export default Classform