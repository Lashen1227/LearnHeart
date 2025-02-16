import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

export const RequestSession = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    description: "",
    grade: "",
    expDate: "",
    location: "",
    expStudentCount: "",
    expTeacherCount: "",
    phoneNumber: "",
    organization: "",
    additionalRequests: "",
  });

  const [status, setStatus] = useState({
    message: "",
    isError: false,
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, loading: true });

    try {
      const response = await fetch("http://localhost:3001/api/seminars/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        subject: "",
        description: "",
        grade: "",
        expDate: "",
        location: "",
        expStudentCount: "",
        expTeacherCount: "",
        phoneNumber: "",
        organization: "",
        additionalRequests: "",
      });
      console.log("Form Data Submitted:", formData);
    } catch (error) {
      setStatus({
        message: error.message || "Something went wrong. Please try again.",
        isError: true,
        loading: false,
      });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        Request Session
      </Typography>

      {status.message && (
        <Alert severity={status.isError ? "error" : "success"} sx={{ mb: 2 }}>
          {status.message}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name of the seminar"
            fullWidth
            variant="outlined"
            size="small"
            required
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            fullWidth
            variant="outlined"
            size="small"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            fullWidth
            variant="outlined"
            size="medium"
          />
          <TextField
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="Enter grade"
            fullWidth
            variant="outlined"
            size="small"
            required
          />
          <TextField
            label="Date"
            name="expDate"
            type="date"
            value={formData.expDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            fullWidth
            variant="outlined"
            size="small"
            required
          />
          <TextField
            label="Total Students"
            name="expStudentCount"
            type="number"
            value={formData.expStudentCount}
            onChange={handleChange}
            placeholder="Enter number of students"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ min: 1 }}
            required
          />
          <TextField
            label="Total Teachers"
            name="expTeacherCount"
            type="number"
            value={formData.expTeacherCount}
            onChange={handleChange}
            placeholder="Enter expected teacher count"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ min: 1 }}
          />
          <TextField
            label="contact"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Contact number"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ min: 1 }}
            required
          />
          <TextField
            label="Organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter organization"
            fullWidth
            variant="outlined"
            size="small"
            required
          />
          <TextField
            label="Additional Information"
            name="additionalRequests"
            value={formData.additionalRequests}
            onChange={handleChange}
            placeholder="Enter additional information"
            fullWidth
            variant="outlined"
            size="medium"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={status.loading}
            sx={{ mt: 2 }}
          >
            {status.loading ? "Sending Request..." : "Send Request"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};
