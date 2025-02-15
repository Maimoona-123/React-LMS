// import { useState } from "react"
// import { useStudentContext } from "../Student/StudentContext"
// import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
// import Dashboard from "../Dashboard/Dashboard"


// const SubjectAdd = () => {
//     const {addSubject} = useStudentContext()
//     const [SubjectName, setSubjectName] = useState('')
//     const [Class , setClass] = useState('')
//     // const [radio,setradio] = useState()

//   const handlesubmit = (event)=>{
//     event.preventDefault()
  


//   if (SubjectName && Class) {
//     const newSubject = {
//       SubjectName: SubjectName,
//       Class: Class,
//       // radio : radio
//     };

//     addSubject(newSubject); // Call the context function to add the new subject

//     // Clear the input fields after submission
//     setSubjectName('');
//     setClass('');
//     // setradio('')
//   } 
// }


//   return (  
//     <>
//     <Dashboard/>
//     <form onSubmit={handlesubmit}>
//      <h1>Subject Add</h1>
//      <br />
//      <br />
//      <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
//      <Box sx={{ width: 500, maxWidth: '100%' }}>
//       <TextField fullWidth label="Subject-Name" id="fullWidth" required
//       type="text"
//         value={SubjectName}
//         onChange={(e) => setSubjectName(e.target.value)}
//       />
//     </Box>
//     </div>
//      <br />
//      <br />
//      <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
//      <Box sx={{ width: 500, maxWidth: '100%' }}>
//       <TextField fullWidth label="Class" id="fullWidth" required
//       type="number"
//         value={Class}
//         onChange={(e) => setClass(e.target.value)}
//       />
//     </Box>
//     </div>
//     <br />
//     <br />

//     <FormControl style={{marginRight:'400px'}}>
//   <FormLabel id="demo-radio-buttons-group-label">Select-Group</FormLabel>
//   <RadioGroup
//     aria-labelledby="demo-radio-buttons-group-label"
//     defaultValue="female"
//     name="radio-buttons-group"
//   >
//     <FormControlLabel value="female" control={<Radio />} label="General-Science" />
//     <FormControlLabel value="male" control={<Radio />} label="Mathametics" />
//     <FormControlLabel value="other" control={<Radio />} label="Pre-Engeering" />
//   </RadioGroup>
//   <br />
//   <br />
//   <Button  type='submit'  style={{backgroundColor:'purple',color:'white',width:'200%'}}>Register</Button>
  
// </FormControl>

//     </form>

//     </>
//   )
// }

// export default SubjectAdd;



import { useState } from "react";
import { useStudentContext } from "../Student/StudentContext";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";

const SubjectAdd = () => {
    const { addSubject } = useStudentContext();
    const [SubjectName, setSubjectName] = useState('');
    const [Class, setClass] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('female'); // Added state for radio button

    const handlesubmit = (event) => {
        event.preventDefault();

        if (SubjectName && Class && selectedGroup) {
            const newSubject = {
                SubjectName: SubjectName,
                Class: Class,
                Group: selectedGroup, // Include selected radio value
            };

            addSubject(newSubject); // Call the context function to add the new subject

            // Clear the input fields after submission
            setSubjectName('');
            setClass('');
            setSelectedGroup('female'); // Reset radio button selection
        }
    };

    return (
        <>
            <Dashboard />
            <div style={styles.pageWrapper}>
                <form onSubmit={handlesubmit} style={styles.formWrapper}>
                    <h1 style={styles.heading}>Subject Add</h1>
                    <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
                        <TextField
                            fullWidth
                            label="Subject-Name"
                            id="fullWidth"
                            required
                            type="text"
                            value={SubjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            style={styles.textField}
                        />
                    </Box>

                    <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
                        <TextField
                            fullWidth
                            label="Class"
                            id="fullWidth"
                            required
                            type="number"
                            value={Class}
                            onChange={(e) => setClass(e.target.value)}
                            style={styles.textField}
                        />
                    </Box>

                    <FormControl style={styles.radioGroupWrapper}>
                        <FormLabel id="demo-radio-buttons-group-label">Select-Group</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={selectedGroup}
                            onChange={(e) => setSelectedGroup(e.target.value)}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="General-Science" />
                            <FormControlLabel value="male" control={<Radio />} label="Mathematics" />
                            <FormControlLabel value="other" control={<Radio />} label="Pre-Engineering" />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        type='submit'
                        style={styles.submitButton}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
};

// Inline style for layout and appearance
const styles = {
    pageWrapper: {
        display: 'flex',
        // justifyContent: 'flex-start', // Align the form to the top
        // alignItems: 'flex-start', // Align the form to the top
        // paddingTop: '20px', // Add some top padding to give space from the top
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    formWrapper: {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '600px',
        boxSizing: 'border-box',
        fontSize: '14px', // Smaller font size
    },
    heading: {
        textAlign: 'center',
        marginBottom: '15px',
        fontSize: '18px', // Adjusted heading font size
    },
    inputWrapper: {
        marginBottom: '10px',
    },
    textField: {
        fontSize: '14px', // Smaller font size for text fields
    },
    radioGroupWrapper: {
        marginBottom: '20px',
        marginLeft: '10px',
    },
    submitButton: {
        backgroundColor: 'purple',
        color: 'white',
        width: '100%',
        padding: '10px 0',
        fontSize: '16px', // Smaller font size for the button
    }
};

export default SubjectAdd;
