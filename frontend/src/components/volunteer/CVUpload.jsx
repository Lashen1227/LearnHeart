import { useState } from "react";
import { 
    Button, 
    CircularProgress, 
    Container, 
    Typography, 
    Box, 
    Paper, 
    List, 
    ListItem, 
    ListItemText 
} from "@mui/material";
import { styled } from "@mui/system";

const Input = styled("input")({
  display: "none",
});

const CVUpload = () => {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(null); // Reset error on new file selection
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null); // Reset error on new upload attempt
    const formData = new FormData();
    formData.append("cv", file);
    
    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) throw new Error("Failed to extract skills");
      const data = await response.json();
      setSkills(data.skills);
    } catch (error) {
      console.error(error);
      setError("Failed to extract skills. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Upload Your CV
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Please upload your CV to extract relevant skills.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <label htmlFor="upload-cv">
            <Input id="upload-cv" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
            <Button variant="contained" component="span" sx={{ mr: 2 }}>
              Choose File
            </Button>
          </label>
          {file && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Selected File: <strong>{file.name}</strong>
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleUpload}
          disabled={!file || loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Proceed"}
        </Button>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        {skills.length > 0 && (
          <Box sx={{ mt: 4, textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              Extracted Skills:
            </Typography>
            <List dense>
              {skills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default CVUpload;