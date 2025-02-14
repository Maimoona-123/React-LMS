import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import { StudentProvider } from './Components/Student/StudentContext';
import StudentRegistrationForm from './Components/Student/StudentRegistrationForm';
import StudentListForm from './Components/Student/StudentListForm';;
import TeacherRegistration from './Components/Teacher/TeacherRegistration';
import TeacherList from './Components/Teacher/TeacherList';
import SubjectAdd from './Components/Subject/SubjectAdd';
import SubjectList from './Components/Subject/Subjectlist';
import Syllabusform from './Components/Syllabus/Syllabusform';
import Syllabuslist from './Components/Subject/Subjectlist';
import Schoolstd from './Components/School/SchoolStd';
import Schoolteache from './Components/School/Schoolteache';
import ClassList from './Components/Class/ClassList';
import Classform from './Components/Class/ClassForm';
import FeeStructure from './Components/Fees/FeeStructure';
import FeeSubmission from './Components/Fees/FeeSubmission';
import FeeVoucher from './Components/Fees/FeeVOucher';
import AdmissionForm from './Components/Admission/Addmissionform';




function App() {

 

  return (
    <>
  
   <Routes>
    <Route  path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes> 

    <StudentProvider>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/student-registration' element={<StudentRegistrationForm/>}/>
        <Route path='/student-list' element={<StudentListForm/>}/>
        <Route path='/teacher-regestration' element={<TeacherRegistration/>} />
        <Route path='/teacher-list' element={<TeacherList/>}/>
        <Route path='/subjectadd' element={<SubjectAdd/>}/>
        <Route path='/subjectlist' element={<SubjectList/>}/>
        <Route path='/syllabusform' element={<Syllabusform/>}/>
        <Route path='/syllabuslist' element={<Syllabuslist/>}/>
        <Route path='/schoolstuddent' element={<Schoolstd/>}/>
        <Route path='/schoolteacher' element={<Schoolteache/>}/>
        <Route path='/classform' element={<Classform/>}/>
        <Route path='/classlist' element={<ClassList/>}/>
        <Route path='/feestructure' element={<FeeStructure/>}/>
        <Route path='/feesubmission' element={<FeeSubmission/>}/>
        <Route path='/voucher' element={<FeeVoucher/>}/>
        <Route path='/addmissionform' element={<AdmissionForm/>}/>


      </Routes>
    </StudentProvider>
      
    
    
    </>
  )
}

export default App;