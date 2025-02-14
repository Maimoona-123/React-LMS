
import { useState } from 'react';
import { useStudentContext } from './StudentContext';
import { Box, Button,  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';

function StudentRegistrationForm() {
  const { addStudent } = useStudentContext(); // Access the addStudent function from context
  const [studentName, setStudentName] = useState('');
  const [lastName, setlastName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentClass, setstudentclass] = useState('');



//   const [studentAge, setStudentAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: studentName,
      last : lastName,
      email : studentEmail,
      class : studentClass,
    //   age: studentAge,

    };
    addStudent(newStudent); // Add the student to the context
    setStudentName('');
    // setStudentAge('');
    setlastName('')
    setstudentEmail('')
    setstudentclass('')
  };
   

  return(
    <>
    <Dashboard/>
  <form onSubmit={handleSubmit} >
    <div>
        <h1> Student Registration form</h1>
    </div>


    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>

    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Firstname" id="fullWidth" required
      type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      
      
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
      
      value={studentEmail}
      onChange={(e) => setstudentEmail(e.target.value)}
      
      />
    </Box>
  </div>

  <br />
    <br />
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'  ,flexWrap:'wrap'}}>
  <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Class" id="fullWidth" required
        value={studentClass}
        onChange={(e) => setstudentclass(e.target.value)}
      
      
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



export default StudentRegistrationForm;


// return (
//     <div>
//       <h2>Student Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={studentName}
//               onChange={(e) => setStudentName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Age:
//             <input
//               type="number"
//               value={studentAge}
//               onChange={(e) => setStudentAge(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );