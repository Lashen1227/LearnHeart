import { Typography, Paper } from "@mui/material";

const VolunteerRequest = () => {
  return (
    <Paper elevation={3} sx={{ bgcolor: "#4db6ac", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Volunteer Request
      </Typography>
      <Typography variant="body2" mb={2}>
        Volunteer Request cards need to be displayed here with accept and reject buttons. And give permission to download the CV before submit response
      </Typography>
    </Paper>
  );
};

export default VolunteerRequest;
