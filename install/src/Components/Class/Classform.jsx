import { Box, Button, FormControl, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { useStudentContext } from "../Student/StudentContext";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const Classform = () => {
  const { addClass } = useStudentContext();
  const [studentName, setStudentName] = useState('');
  const [lastName, setlastName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentClass, setstudentclass] = useState('');
  const [phone, setphone] = useState('');
  const [qualification, setqualification] = useState('');
  const [birth, setbirth] = useState('');
  const [gender, setGender] = useState('female'); // Gender state

  const handleSubmit = (event) => {
    event.preventDefault();

    const newclass = {
      studentName: studentName,
      lastName: lastName,
      studentEmail: studentEmail,
      phone: phone,
      studentClass: studentClass,
      qualification: qualification,
      birth: birth,
      gender: gender, // Added gender to form data
    };
    addClass(newclass);

    // Reset form
    setStudentName('');
    setlastName('');
    setstudentEmail('');
    setstudentclass('');
    setqualification('');
    setphone('');
    setbirth('');
    setGender('female'); // Reset gender to default
  };

  return (
    <>
      <Dashboard />
      <Box sx={styles.container}>
        <form onSubmit={handleSubmit} style={styles.formWrapper}>
          <h1 style={styles.heading}>Student Registration Form (Class)</h1>

          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField
              fullWidth
              label="Firstname"
              id="fullWidth"
              required
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={styles.inputField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Lastname"
              id="fullWidth"
              required
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              style={styles.inputField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              required
              type="email"
              value={studentEmail}
              onChange={(e) => setstudentEmail(e.target.value)}
              style={styles.inputField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Phone"
              id="fullWidth"
              required
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              style={styles.inputField}
            />
          </Box>


          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <TextField
              fullWidth
              label="Qualification"
              id="fullWidth"
              required
              value={qualification}
              onChange={(e) => setqualification(e.target.value)}
              style={styles.inputField}
            />
          </Box>

          <Box sx={{ width: 500, maxWidth: '100%' }} style={styles.inputWrapper}>
            <FormControl fullWidth required>
              <FormLabel id="gender-label">Gender</FormLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                displayEmpty
                fullWidth
                style={styles.inputField}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button type="submit" fullWidth style={styles.submitButton}>
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};

// Styles for layout
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  formWrapper: {
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '8px',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '600px', // Adjusted container width
    boxSizing: 'border-box',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '22px', // Reduced font size for the heading
  },
  inputWrapper: {
    marginBottom: '20px',
  },
  inputField: {
    fontSize: '14px',
    padding: '10px',
  },
  submitButton: {
    backgroundColor: 'purple',
    color: 'white',
    fontSize: '16px',
    padding: '10px 0',
    marginTop: '10px',
  },
};

export default Classform;
