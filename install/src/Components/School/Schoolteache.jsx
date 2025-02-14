import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useStudentContext } from "../Student/StudentContext"
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";


const Schoolteache = () => {
    let { addTeacher } = useStudentContext()
    const [teacheName, setteacherName] = useState('');
      const [lastName, setlastName] = useState('');
      const [teacherEmail, setteacherEmail] = useState('');
      const [teacherClass, setteacherclass] = useState('');

    let handleSubmit = (e)=>{
     e.preventDefault("")
    
     

        const newteacher={
            name : teacheName,
            last : lastName,
            email : teacherEmail,
            class : teacherClass

        }
        addTeacher(newteacher);
        setteacherName("")
        setlastName("")
        setteacherEmail("")
        setteacherclass("")
    }    
    
  return (
    <>
    <Dashboard/>
  <form onSubmit={handleSubmit}>
    <div>
        <h1>Teacher Regestration Form</h1>
    </div>


    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>

    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Firstname" id="fullWidth" required
      type="text"
        value={teacheName}
        onChange={(e) => setteacherName(e.target.value)}
      
      
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
    onChange={(e) => setlastName(e.target.value)}
  
      
      />
    </Box>
  </div>

  <br />
    <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Email" id="fullWidth" required type='email'
      
      value={teacherEmail}
      onChange={(e) => setteacherEmail(e.target.value)}
      
      />
    </Box>
  </div>

  <br />
    <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Class" id="fullWidth" required
        value={teacherClass}
        onChange={(e) => setteacherclass(e.target.value)}
      
      
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

export default Schoolteache;