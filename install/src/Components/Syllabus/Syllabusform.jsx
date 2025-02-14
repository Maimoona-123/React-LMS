// import { useState } from "react"
import { useState } from "react"
import { useStudentContext } from "../Student/StudentContext"
import { Box, Button, FormControl, TextField } from "@mui/material"
import Dashboard from "../Dashboard/Dashboard"


 const Syllabusform = () => {
    const [syllabusname,setsyllabusname] = useState('')
    const [syllabusclass,setsyllabusclass] = useState('')
    const {addsyllabus} = useStudentContext()

  const handlesubmit = (e)=>{
    e.preventDefault()
  
   const newsyllabus ={
    syllabusname: syllabusname,
    syllabusclass : syllabusclass
    
   } 
   addsyllabus(newsyllabus);
   setsyllabusname(''),
   setsyllabusclass('')
  }

  return (
   <>
   <Dashboard/>
   
   <form onSubmit={handlesubmit}>
     <h1>Syllabus Add</h1>
     <br />
     <br />
     <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
     <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Subject-Name" id="fullWidth" required
      type="text"
        value={syllabusname}
        onChange={(e) => setsyllabusname(e.target.value)}
      />
    </Box>
    </div>
     <br />
     <br />
     <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
     <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Class" id="fullWidth" required
      type="number"
        value={syllabusclass}
        onChange={(e) => setsyllabusclass(e.target.value)}
      />
    </Box>
    </div>
    <br />
    <br />

    <FormControl  style={{marginRight:'400px'}}>
    <Button    fullWidth style={{backgroundColor:'green',color:'white',width:'450%'}}>Upload file</Button>
    <br />
    <br />
    <Button  type='submit'  fullWidth style={{backgroundColor:'green',color:'white',width:'450%'}}>Register</Button>
    </FormControl>
    </form>
   
   </>
  )
}
export default Syllabusform;