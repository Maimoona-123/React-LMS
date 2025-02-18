import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import { PiStudentFill } from 'react-icons/pi';
import { FaAddressBook, FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { IoHomeOutline } from 'react-icons/io5';
import { FaMoneyBill1 } from 'react-icons/fa6';


// Define drawer width
const drawerWidth = 240;


export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mailAnchorEl, setMailAnchorEl] = React.useState(null);
  const [subjectAnchorEl, setsubjectAnchorEl] = React.useState(null)
  const [syllabusAnchorEl,setsyllabusAnchorEl] = React.useState(null)
  const [schoolAnchorEl, setschoolAnchorEl] = React.useState(null)
  const [classAnchorEl,setclassAnchorEl]  = React.useState(null);
   const [feesAnchorEl,setfeesAnchorEl] = React.useState(null);
   const [addmissionformAnchorEl,setaddmissionformAnchorEl] =React.useState(null)
   
   
   const open = Boolean(anchorEl);
   const mailOpen = Boolean(mailAnchorEl);
   const subjectOpen = Boolean(subjectAnchorEl);
   const syllabusOpen = Boolean(syllabusAnchorEl);
   const schoolOpen = Boolean(schoolAnchorEl)
   const classOpen = Boolean(classAnchorEl) 
   const feesOpen = Boolean(feesAnchorEl)
  const addmissionOpen = Boolean(addmissionformAnchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   
  const handleMailClick = (event) => {
    setMailAnchorEl(event.currentTarget);
  };
  const handlesubjectclick = (event) =>{
    setsubjectAnchorEl(event.currentTarget)
  }
  const handlesyllabusclick = (event)=>{
    setsyllabusAnchorEl(event.currentTarget)
  }
  const handleschoolclick = (event)=>{
    setschoolAnchorEl(event.currentTarget)
  }
  const handleclassclick = (event)=>{
    setclassAnchorEl(event.currentTarget)
  }
  const handlefeeclick = (event)=>{
    setfeesAnchorEl(event.currentTarget)
  }
  const handleaddmissionclick= (event)=>{
    setaddmissionformAnchorEl(event.currentTarget)
   } 
   
   
   const handleClose = () => {
     setAnchorEl(null);
    setMailAnchorEl(null);
    setsubjectAnchorEl(null);
    setsyllabusAnchorEl(null);
    setschoolAnchorEl(null);
    setclassAnchorEl(null);
    setfeesAnchorEl(null);
  };
  
  const logOut = () =>{
    localStorage.clear();
    navigate("/")
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
  position="fixed"
  sx={{
    width: "100%",  // Full width
    zIndex: (theme) => theme.zIndex.drawer + 1,  // Ensures AppBar is above the drawer
    color: "white",
    background: "linear-gradient(to right, purple, violet ,pink)"
  }}
>
  <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
    <Typography variant="h6" noWrap component="div">
      Educon's Learning System
    </Typography>
    <Button onClick={logOut} variant='contained'sx={{backgroundColor:"white", color:"purple"}}>SignOut</Button>
  </Toolbar>
</AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(to right, purple ,pink)',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* Inbox with dropdown for forms */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <PiStudentFill />
              </ListItemIcon>
              <ListItemText primary="Student" />
            </ListItemButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/student-registration">
                Student Registration Form
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/student-list">
                Student List Form
              </MenuItem>
            </Menu>
          </ListItem>
          {/* Other options in the drawer */}

          <ListItem disablePadding>
            <ListItemButton onClick={handleMailClick}>
              <ListItemIcon>
                <FaChalkboardTeacher />
              </ListItemIcon>
              <ListItemText primary="Teacher" />
            </ListItemButton>
            <Menu
              anchorEl={mailAnchorEl}
              open={mailOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/teacher-regestration">
                Teacher Regestration
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/teacher-list">
               Teacher List
              </MenuItem>
            </Menu>
          </ListItem>

          {/* subject dropdown */}

          <ListItem disablePadding>
            <ListItemButton onClick={handlesubjectclick}>
              <ListItemIcon>
                <FaAddressBook />
              </ListItemIcon>
              <ListItemText primary="Subject" />
            </ListItemButton>
            <Menu
              anchorEl={subjectAnchorEl}
              open={subjectOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/subjectadd">
                Subject Add
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/subjectlist">
               Subject List
              </MenuItem>
            </Menu>
          </ListItem>
          {/* Syllabus dropdown */}

          <ListItem disablePadding>
            <ListItemButton onClick={handlesyllabusclick}>
              <ListItemIcon>
                <GrNotes />
              </ListItemIcon>
              <ListItemText primary="Syllabus" />
            </ListItemButton>
            <Menu
              anchorEl={syllabusAnchorEl}
              open={syllabusOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/syllabusform">
               Syllabus Form
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/syllabuslist">
               Syllabus List
              </MenuItem>
            </Menu>
          </ListItem>
          {/* school dropdown */}

          <ListItem disablePadding>
            <ListItemButton onClick={handleschoolclick}>
              <ListItemIcon>
                <FaSchool />
              </ListItemIcon>
              <ListItemText primary="School" />
            </ListItemButton>
            <Menu
              anchorEl={schoolAnchorEl}
              open={schoolOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/schoolstuddent">
               Student Regestration 
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/schoolteacher">
               Teacher Regestration
              </MenuItem>
            </Menu>
          </ListItem>
          {/* class drop down */}
           
          <ListItem disablePadding>
            <ListItemButton onClick={handleclassclick}>
              <ListItemIcon>
                <IoHomeOutline />
              </ListItemIcon>
              <ListItemText primary="Class" />
            </ListItemButton>
            <Menu
              anchorEl={classAnchorEl}
              open={classOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/classform">
              Class Form
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/classlist">
               Class List
              </MenuItem>
            </Menu>
          </ListItem>
          {/* Fee Dropdown */}

          <ListItem disablePadding>
            <ListItemButton onClick={handlefeeclick}>
              <ListItemIcon>
                <FaMoneyBill1 />
              </ListItemIcon>
              <ListItemText primary="Fees" />
            </ListItemButton>
            <Menu
              anchorEl={feesAnchorEl}
              open={feesOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/feestructure">
             Fee Structure
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/voucher">
              Fee Voucher
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/feesubmission">
               Fee Submission
              </MenuItem>
            </Menu>
          </ListItem>
          {/* Addmission dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleaddmissionclick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Addmission" />
            </ListItemButton>
            <Menu
              anchorEl={addmissionformAnchorEl}
              open={addmissionOpen}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/inbox">
                Inbox
              </MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/addmissionform">
             Addmission Form
              </MenuItem>
             
              
            </Menu>
          </ListItem>
          
          
          

        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}