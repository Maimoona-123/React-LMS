import { Box,     Button,     FormControl,   InputLabel,     MenuItem,   Select,   TextField, Typography, } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';




const FeeSubmission = () => {

 
  const [selectedValue, setSelectedValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  // Data for accordion items
  const accordionItems = [
    { title: 'Credit Card', content: 'This is the content for Item 1' },
    { title: 'Debit Card', content: 'This is the content for Item 2' },
    { title: 'Net Banking', content: 'This is the content for Item 3' },
  ];

  // Handle change in dropdown selection
  const handleDropdownChange = (event) => {
    const selectedTitle = event.target.value;
    const selectedItem = accordionItems.find(item => item.title === selectedTitle);
    if (selectedItem) {
      setDropdownValue(selectedItem.title);
      setSelectedValue(selectedItem.content);
    }
  };

  
  
  

  return (
    <>
    <Dashboard/>
    
    <form>

    <h1>Payment For</h1>
   <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
   
    <Box sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label='Enter name' id='fullWidth' type='text' required/> 
    </Box>
    </div>
    <br />
    <br />
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label='Father Name' id='fullWidth' type='text' required/> 
    </Box>
    </div>
    <br />
    <br />
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label='Class' id='fullWidth' type='text' required/> 
    </Box>
    </div>
    <br />
    <br />
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label='Payment' id='fullWidth' type='number' required/> 
    </Box>
    </div>
    <br />
    
    <div style={{ padding: '20px', maxWidth: '540px' }}>
      
      {/* Dropdown TextField */}
      


      <FormControl fullWidth style={{ marginLeft:'340px' }}>
        <InputLabel>Choose an item</InputLabel>
        <Select
          value={dropdownValue}
          onChange={handleDropdownChange}
          label="Choose an item"
        >
          {accordionItems.map((item, index) => (
            <MenuItem key={index} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      </div>
      <Button  type='submit'  fullWidth style={{backgroundColor:'purple',color:'white',width:'41%'}}>Register</Button>
      
   

    </form>
    
    
    </>
  )
}

export default FeeSubmission