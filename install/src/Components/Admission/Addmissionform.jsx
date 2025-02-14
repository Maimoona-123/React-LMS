import React, { useState } from "react";
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, FormHelperText, Grid, Box } from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: null,
    qualification: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: newDate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <>
    <Dashboard/>
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 2, backgroundColor: "#f4f6f8", borderRadius: 2, boxShadow: 3 }}>
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
              required
              />
          </Grid>


          {/* Qualification */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Qualification</InputLabel>
              <Select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                label="Qualification"
                required
                >
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                <MenuItem value="Postgraduate">Postgraduate</MenuItem>
              </Select>
              <FormHelperText>Choose your highest qualification</FormHelperText>
            </FormControl>
          </Grid>

          {/* Gender */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
                required
                >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
              </>
  );
}
