import { useState } from 'react';
import { useStudentContext } from '../Student/StudentContext';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';

function StudentRegistrationForm() {
  const { addStudent } = useStudentContext(); // Access the addStudent function from context
  const [studentName, setStudentName] = useState('');
  const [lastName, setlastName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentClass, setstudentclass] = useState('');
  const [schoolName, setSchoolName] = useState(''); // School name
  const [dob, setDob] = useState(''); // Date of birth
  const [selectedGender, setSelectedGender] = useState(''); // Gender selection

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: studentName,
      last: lastName,
      email: studentEmail,
      class: studentClass,
      school: schoolName,
      dob: dob,
      gender: selectedGender, // Add gender information
    };
    addStudent(newStudent); // Add the student to the context
    // Reset form fields
    setStudentName('');
    setlastName('');
    setstudentEmail('');
    setstudentclass('');
    setSchoolName('');
    setDob('');
    setSelectedGender('');
  };

  return (
    <>
      <Dashboard />
      <div style={styles.pageWrapper}>
        <form onSubmit={handleSubmit} style={styles.formWrapper}>
          <h1 style={styles.heading}>Student Registration Form</h1>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="First Name"
              id="first-name"
              required
              type="text"
              value={studentName}
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
              value={studentEmail}
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
              value={studentClass}
              onChange={(e) => setstudentclass(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="School Name"
              id="school-name"
              required
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              style={styles.textField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Date of Birth"
              id="dob"
              required
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
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
    overflow: 'hidden', // Prevent scrolling of the page
  },
  formWrapper: {
    padding: '20px',
    border: '2px solid purple', // Purple border around the form
    borderRadius: '8px',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '450px', // Reduced form width to make it more compact
    boxSizing: 'border-box',
    fontSize: '14px', // Smaller font size
    overflow: 'hidden', // Ensure the form doesn't overflow and scroll
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

export default StudentRegistrationForm;
