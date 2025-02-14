import { useState } from "react"
import { useStudentContext } from "../Student/StudentContext"
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import Dashboard from "../Dashboard/Dashboard"


const SubjectAdd = () => {
    const {addSubject} = useStudentContext()
    const [SubjectName, setSubjectName] = useState('')
    const [Class , setClass] = useState('')
    // const [radio,setradio] = useState()

  const handlesubmit = (event)=>{
    event.preventDefault()
  


  if (SubjectName && Class) {
    const newSubject = {
      SubjectName: SubjectName,
      Class: Class,
      // radio : radio
    };

    addSubject(newSubject); // Call the context function to add the new subject

    // Clear the input fields after submission
    setSubjectName('');
    setClass('');
    // setradio('')
  } 
}


  return (
    <>
    <Dashboard/>
    <form onSubmit={handlesubmit}>
     <h1>Subject Add</h1>
     <br />
     <br />
     <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
     <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Subject-Name" id="fullWidth" required
      type="text"
        value={SubjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
    </Box>
    </div>
     <br />
     <br />
     <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
     <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Class" id="fullWidth" required
      type="number"
        value={Class}
        onChange={(e) => setClass(e.target.value)}
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

export default SubjectAdd;