import { useState } from 'react';
import { useStudentContext } from '../Student/StudentContext';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';

function TeacherRegistration() {
  const { addTeacher } = useStudentContext(); // Access the addTeacher function from context
  const [TeacherName, setStudentName] = useState('');
  const [lastName, setlastName] = useState('');
  const [TeacherEmail, setstudentEmail] = useState('');
  const [TeacherClass, setstudentclass] = useState('');
  const [selectedGender, setSelectedGender] = useState(''); // State for selected gender

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeacher = {
      name: TeacherName,
      last: lastName,
      email: TeacherEmail,
      class: TeacherClass,
      gender: selectedGender, // Add gender information
    };
    addTeacher(newTeacher); // Add the teacher to the context
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
              label="Teacher Name"
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
              label="Last Name"
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

          <FormControl fullWidth style={styles.inputWrapper}>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              label="Gender"
              required
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
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
    fontSize: '30px', // Adjusted heading font size
  },
  inputWrapper: {
    marginBottom: '15px', // Increased margin for better spacing
  },
  textField: {
    fontSize: '14px', // Smaller font size for text fields
  },
  submitButton: {
    backgroundColor: 'purple',
    color: 'white',
    width: '100%',
    padding: '10px 0',
    fontSize: '16px', // Smaller font size for the button
  },
};

export default TeacherRegistration;
