import { useState } from 'react';
import { useStudentContext } from '../Student/StudentContext';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';

function Schoolteache() {
  const { addTeacher } = useStudentContext(); // Access the addStudent function from context
  const [TeacherName, setStudentName] = useState('');
  const [lastName, setlastName] = useState('');
  const [TeacherEmail, setstudentEmail] = useState('');
  const [TeacherClass, setstudentclass] = useState('');
  const [selectedGender, setSelectedGender] = useState(''); // State for selected gender

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: TeacherName,
      last: lastName,
      email: TeacherEmail,
      class: TeacherClass,
      gender: selectedGender, // Add gender information
    };
    addStudent(newStudent); // Add the student to the context
    setStudentName('');
    setlastName('');
    setstudentEmail('');
    setstudentclass('');
    setSelectedGender('');
  };

  return (
    <>
      <Dashboard />
      <div style={styles.pageWrapper}>
        <form onSubmit={handleSubmit} style={styles.formWrapper}>
          <h1 style={styles.heading}>Teacher Registration Form</h1>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="TeacherName"
              id="first-name"
              required
              type="text"
              value={TeacherName}
              onChange={(e) => setStudentName(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Lastname"
              id="last-name"
              required
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Email"
              id="email"
              required
              type="email"
              value={TeacherEmail}
              onChange={(e) => setstudentEmail(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Class"
              id="class"
              required
              value={TeacherClass}
              onChange={(e) => setstudentclass(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <FormControl style={styles.radioGroupWrapper}>
            <FormLabel id="gender-radio-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender-radio-group-label"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <Button type="submit" style={styles.submitButton}>
            Register
          </Button>
        </form>
      </div>
    </>
  );
}

// Inline style for layout and appearance
const styles = {
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the top of the page
    height: '100vh',
    backgroundColor: '#f4f4f4',
    paddingTop: '20px', // Padding to give space from the top
  },
  formWrapper: {
    padding: '20px',
    border: '2px solid purple', // Purple border around the form
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
    marginBottom: '15px', // Increased margin for better spacing
  },
  textField: {
    fontSize: '14px', // Smaller font size for text fields
  },
  radioGroupWrapper: {
    marginBottom: '20px',
  },
  submitButton: {
    backgroundColor: 'purple',
    color: 'white',
    width: '100%',
    padding: '10px 0',
    fontSize: '16px', // Smaller font size for the button
  },
};

export default Schoolteache;
