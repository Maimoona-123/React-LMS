import { useState } from "react";
import { useStudentContext } from "../Student/StudentContext";
import { Box, Button, FormControl, TextField } from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";

const Syllabusform = () => {
    const [syllabusname, setsyllabusname] = useState('');
    const [syllabusclass, setsyllabusclass] = useState('');
    const [fileUploaded, setFileUploaded] = useState(false); // State to handle file upload status
    const { addsyllabus } = useStudentContext();

    const handlesubmit = (e) => {
        e.preventDefault();

        const newsyllabus = {
            syllabusname: syllabusname,
            syllabusclass: syllabusclass
        };

        addsyllabus(newsyllabus); // Add syllabus to context

        // Reset form
        setsyllabusname('');
        setsyllabusclass('');
        setFileUploaded(false); // Reset file upload status
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            // Simulate file upload
            setFileUploaded(true);
            console.log("File uploaded:", file.name);
            // You can handle the file upload logic here (e.g., send to server)
        }
    };

    return (
        <>
            <Dashboard />
            <div style={styles.pageWrapper}>
                <form onSubmit={handlesubmit} style={styles.formWrapper}>
                    <h1 style={styles.heading}>Syllabus Add</h1>
                    <Box sx={{ width: '100%', maxWidth: 500 }} style={styles.inputWrapper}>
                        <TextField
                            fullWidth
                            label="Syllabus Name"
                            id="syllabus-name"
                            required
                            type="text"
                            value={syllabusname}
                            onChange={(e) => setsyllabusname(e.target.value)}
                            style={styles.textField}
                        />
                    </Box>

                    <Box sx={{ width: '100%', maxWidth: 500 }} style={styles.inputWrapper}>
                        <TextField
                            fullWidth
                            label="Class"
                            id="syllabus-class"
                            required
                            type="number"
                            value={syllabusclass}
                            onChange={(e) => setsyllabusclass(e.target.value)}
                            style={styles.textField}
                        />
                    </Box>

                    <Box sx={{ width: '100%', maxWidth: 500 }} style={styles.inputWrapper}>
                        <input
                            accept="application/pdf, .docx, .pptx" // Specify accepted file types
                            id="file-upload"
                            type="file"
                            style={{ display: 'none' }} // Hide default file input
                            onChange={handleFileUpload} 
                        />
                        <label htmlFor="file-upload">
                            <Button
                                component="span"
                                fullWidth
                                style={fileUploaded ? styles.fileUploadedButton : styles.uploadButton}
                            >
                                {fileUploaded ? "File Uploaded" : "Upload File"}
                            </Button>
                        </label>
                    </Box>

                    <FormControl style={styles.formControl}>
                        <Button
                            type="submit"
                            fullWidth
                            style={styles.submitButton}
                        >
                            Add Syllabus
                        </Button>
                    </FormControl>
                </form>
            </div>
        </>
    );
};

// Inline styles for form layout and appearance
const styles = {
    pageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',  // Align at the top of the screen
        height: '100vh',           // Full viewport height
        backgroundColor: '#f4f4f4',
        paddingTop: '20px',        // Add space at the top of the page
    },
    formWrapper: {
        padding: '15px', // Reduced padding to make the form more compact
        border: '2px solid purple', // Purple border around the form
        borderRadius: '8px',
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '500px', // Set a maximum width for the form container
        boxSizing: 'border-box',
        fontSize: '14px', // Smaller font size
    },
    heading: {
        textAlign: 'center',
        marginBottom: '15px',
        fontSize: '25px', // Adjusted heading font size
    },
    inputWrapper: {
        marginBottom: '12px', // Reduced margin for more compact form
    },
    textField: {
        fontSize: '14px', // Smaller font size for text fields
        padding: '8px', // Reduced padding inside the text field
    },
    formControl: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center', // Align the form control buttons in the center
    },
    uploadButton: {
        backgroundColor: 'purple',
        color: 'white',
        fontSize: '16px',
        padding: '8px 0', // Adjusted padding to make button size more consistent
        width: '100%', // Ensure full width
    },
    fileUploadedButton: {
        backgroundColor: 'gray',
        color: 'white',
        fontSize: '16px',
        padding: '3px 0', // Adjusted padding for file upload button
        width: '100%', // Ensure full width
    },
    submitButton: {
        backgroundColor: 'purple',
        color: 'white',
        fontSize: '16px',
        padding: '3px 0', // Standard padding for the button
        width: '100%', // Make the submit button take full width
    }
};

export default Syllabusform;
