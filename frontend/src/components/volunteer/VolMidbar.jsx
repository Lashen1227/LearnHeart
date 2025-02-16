import { useState } from "react";
import {  Box, TextField, Checkbox, FormControlLabel, Button, Typography, Paper, FormControl, FormGroup } from "@mui/material";

function VolMidbar() {
  const [formData, setFormData] = useState({
    qualifications: "",
    language: "",
    subjects: "",
    availableDates: []
  });

  const availableDatesOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      availableDates: checked
        ? [...prev.availableDates, value]
        : prev.availableDates.filter((date) => date !== value),
    }));
  };

  const handleClear = () => {
    setFormData({
      qualifications: "",
      language: "",
      subjects: "",
      availableDates: []
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: "center", bgcolor: "#4db6ac" }}>
        <Typography variant="h6">Join with Organizations</Typography>
        <Typography variant="body2" mt={1}>Check out the latest events you can join.</Typography>
        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            fullWidth
            label="Education / Work Qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Language Proficiency"
            name="language"
            value={formData.language}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Teaching Subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            margin="normal"
          />

            <Typography variant="body">Available Dates:</Typography>
            <FormControl component="fieldset">
                    <FormGroup row>
                        {availableDatesOptions.map((date) => (
                            <FormControlLabel
                                key={date}
                                control={
                                    <Checkbox
                                        value={date}
                                        checked={formData.availableDates.includes(date)}
                                        onChange={handleCheckboxChange}
                                    />
                                }
                                label={date}
                            />
                        ))}
                    </FormGroup>
            </FormControl>

          <Box display="flex" gap={2} mt={2}>
            <Button fullWidth variant="contained" color="primary" onClick={handleClear}>Clear</Button>
            <Button fullWidth variant="contained" color="warning" type="submit">Join</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default VolMidbar;