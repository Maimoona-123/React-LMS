import  { createContext, useState, useContext } from 'react';

// Create a Context for the student data
const StudentContext = createContext();

// Create a custom hook to use the StudentContext
export const useStudentContext = () => {
  return useContext(StudentContext);
};

// Provider component to wrap the app and provide the context to all components
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject]  = useState([])
  const [syllabus, setSyllabus]  = useState([])
 const [Classform,setClassForm] = useState([]) 


  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const addClass = (cls)=>{
    setClassForm((prevform)=>[...prevform,cls])
  }


  const addTeacher = (teacher)=>{
   setTeachers((prevTeacher) => [...prevTeacher, teacher])
  }
   
  const addSubject = (sub)=>{
    setSubject((prevsub)=>[...prevsub,sub])
  }

  const addsyllabus = (syl)=>{
    setSyllabus((prevsyl)=>[...prevsyl,syl])
  }


 

  return (
    <StudentContext.Provider value={{ students, addStudent , teachers, addTeacher ,subject, addSubject, syllabus,addsyllabus,Classform,addClass}}>
      {children}
    </StudentContext.Provider>
    
  );
};