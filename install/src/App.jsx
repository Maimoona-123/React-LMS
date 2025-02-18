
// import { Route, Routes } from 'react-router-dom'
// import './App.css'

// import Login from './Components/Login/Login'
// import SignUp from './Components/Signup/Signup';

// import { StudentProvider } from './Components/Student/StudentContext';
// import Dashboard from './Components/Dashboard/Dashboard';
// import StudentRegistrationForm from './Components/Student/StudentRegistrationForm';
// import StudentListForm from './Components/Student/StudentListForm';
// import TeacherRegistration from './Components/Teacher/TeacherRegistration';
// import TeacherList from './Components/Teacher/TeacherList';
// import Subjectlist from './Components/Subject/Subjectlist';
// import SubjectAdd from './Components/Subject/SubjectAdd';
// import Syllabusform from './Components/Syllabus/Syllabusform';
// import Syllabuslist from './Components/Syllabus/Syllabuslist';
// import  Schoolstd  from './Components/School/Schoolstd';
// import Schoolteache from './Components/School/Schoolteache';
// import Classform from './Components/Class/Classform';
// import ClassList from './Components/Class/ClassList';
// import FeeStructure from './Components/Fees/FeeStructure';
// import FeeVoucher from './Components/Fees/FeeVoucher';
// import FeeSubmission from './Components/Fees/FeeSubmission';
// import Addmissionform from './Components/Admission/Addmissionform';
// import protectedRoute from './Components/ProtectedRoute'
// import AuthRoute from './Components/AuthRoute'




// function App() {

 

//   return (
//     <>
  
//    <Routes>
//     <Route  path='/' element={<SignUp/>}/>
//     <Route path='/login' element={<Login/>}/>
   
//     </Routes> 


//     <StudentProvider>
//       <Routes>
//     <Route path='/dashboard' element={<Dashboard/>}/>
//     <Route element={<protectedRoute/>}>   
//       </Routes>
    
//      <Routes>
//      <Route element={<AuthRoute/>}>
//     <Route path="/student-registration" element={<StudentRegistrationForm />} />
//     <Route path="/student-list" element={<StudentListForm />} />  
//     <Route  path="/teacher-regestration" element={<TeacherRegistration/>}/>
//     <Route path="/teacher-list" element={<TeacherList/>}/>
//      <Route path="/subjectadd" element={<SubjectAdd/>}/>
//     <Route path="/subjectlist" element={<Subjectlist/>}/>
//     <Route path="/syllabusform" element={<Syllabusform/>}/>
//     <Route path="/syllabuslist" element={<Syllabuslist/>}/>
//     <Route path="/schoolstuddent" element={<Schoolstd/>}/>
//     <Route path="/schoolteacher" element={<Schoolteache/>}/>
//     <Route path='/classform' element={<Classform/>}/>
//     <Route  path='/classlist' element={<ClassList/>}/>
//     <Route path='/feestructure' element={<FeeStructure/>}/>
//     <Route path='/voucher' element={<FeeVoucher/>}/>
//     <Route path='/feesubmission' element={<FeeSubmission/>}/>
//     <Route path='/addmissionform' element={<Addmissionform/>}/>
//     </Routes>
//     </StudentProvider>

      
    
    
//     </>
//   )
// }

// export default App;



import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './Components/Login/Login'
import SignUp from './Components/Signup/Signup';

import { StudentProvider } from './Components/Student/StudentContext';
import Dashboard from './Components/Dashboard/Dashboard';
import StudentRegistrationForm from './Components/Student/StudentRegistrationForm';
import StudentListForm from './Components/Student/StudentListForm';
import TeacherRegistration from './Components/Teacher/TeacherRegistration';
import TeacherList from './Components/Teacher/TeacherList';
import Subjectlist from './Components/Subject/Subjectlist';
import SubjectAdd from './Components/Subject/SubjectAdd';
import Syllabusform from './Components/Syllabus/Syllabusform';
import Syllabuslist from './Components/Syllabus/Syllabuslist';
import Schoolstd from './Components/School/Schoolstd';
import Schoolteache from './Components/School/Schoolteache';
import Classform from './Components/Class/Classform';
import ClassList from './Components/Class/ClassList';
import FeeStructure from './Components/Fees/FeeStructure';
import FeeVoucher from './Components/Fees/FeeVoucher';
import FeeSubmission from './Components/Fees/FeeSubmission';
import Addmissionform from './Components/Admission/Addmissionform';
import ProtectedRoute from './Components/ProtectedRoute';
import AuthRoute from './Components/AuthRoute';

function App() {
  return (
    <>
      <StudentProvider>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          {/* AuthRoute protects dashboard */}
          <Route element={<AuthRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          {/* ProtectedRoute for student and other forms */}
          <Route element={<ProtectedRoute />}>
            <Route path="/student-registration" element={<StudentRegistrationForm />} />
            <Route path="/student-list" element={<StudentListForm />} />
            <Route path="/teacher-regestration" element={<TeacherRegistration />} />
            <Route path="/teacher-list" element={<TeacherList />} />
            <Route path="/subjectadd" element={<SubjectAdd />} />
            <Route path="/subjectlist" element={<Subjectlist />} />
            <Route path="/syllabusform" element={<Syllabusform />} />
            <Route path="/syllabuslist" element={<Syllabuslist />} />
            <Route path="/schoolstuddent" element={<Schoolstd />} />
            <Route path="/schoolteacher" element={<Schoolteache />} />
            <Route path='/classform' element={<Classform />} />
            <Route path='/classlist' element={<ClassList />} />
            <Route path='/feestructure' element={<FeeStructure />} />
            <Route path='/voucher' element={<FeeVoucher />} />
            <Route path='/feesubmission' element={<FeeSubmission />} />
            <Route path='/addmissionform' element={<Addmissionform />} />
          </Route>
        </Routes>
      </StudentProvider>
    </>
  );
}

export default App;
