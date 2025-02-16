import { Paper, Box, Typography, Button } from "@mui/material";
import { Building } from "lucide-react";

export const SchoolProfile = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 580,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 96,
            height: 150,
            bgcolor: "primary.main",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Building style={{ width: 48, height: 48, color: "white" }} />
        </Box>
        <Typography variant="h5" sx={{ mb: 1, color: "primary.dark" }}>
          School Name
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          A leading institution dedicated to excellence in education and student
          development.
        </Typography>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Box>
    </Paper>
  );
};
