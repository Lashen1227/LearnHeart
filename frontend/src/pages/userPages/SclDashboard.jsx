import Footer from "../../components/Footer";
import SclHeader from "../../components/school/SclHeader";

import { Container, Grid, Box, Paper, Typography, Button } from "@mui/material";
import { SchoolProfile } from "../../components/school/SchoolProfile";
import { SessionsList } from "../../components/school/SessionsList";
import { Reviews } from "../../components/school/Reviews";
import { RequestSession } from "../../components/school/RequestSession";

function SclDashboard() {
  const scheduledSessions = [
    {
      id: "1",
      subject: "Mathematics",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "scheduled",
    },
    {
      id: "2",
      subject: "Physics",
      date: "2024-03-16",
      time: "2:00 PM",
      status: "scheduled",
    },
  ];

  const completedSessions = [
    {
      id: "3",
      subject: "Chemistry",
      date: "2024-03-10",
      time: "11:00 AM",
      status: "completed",
    },
    {
      id: "4",
      subject: "Biology",
      date: "2024-03-09",
      time: "3:00 PM",
      status: "completed",
    },
  ];
  return (
    <div className="h-screen bg-custom-page">
      <div className="flex flex-col min-h-screen">
        <Box
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #e0f2fe, #e0e7ff)",
          }}
        >
          <SclHeader />
          <Container maxWidth="lg" sx={{ py: 10 }}>
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <SchoolProfile />
                </Box>
              </Grid>

              {/* Middle Column */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    pb: 4,
                  }}
                >
                  {/* Scrollable Scheduled Sessions */}
                  <Box
                    sx={{
                      boxShadow: 1, // Small shadow for subtle effect
                      borderRadius: 2, // Optional: Add rounded corners
                      maxHeight: 300, // Set max height
                      overflowY: "auto", // Enable vertical scrolling
                      scrollbarWidth: "none", // Hide scrollbar for Firefox
                      "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome, Safari
                    }}
                  >
                    <SessionsList
                      title="Scheduled Sessions"
                      sessions={scheduledSessions}
                      type="scheduled"
                    />
                  </Box>

                  {/* Scrollable Completed Sessions */}
                  <Box
                    sx={{
                      boxShadow: 1, // Small shadow for subtle effect
                      borderRadius: 2, // Optional: Add rounded corners
                      maxHeight: 300, // Set max height
                      overflowY: "auto", // Enable vertical scrolling
                      scrollbarWidth: "none", // Hide scrollbar for Firefox
                      "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome, Safari
                    }}
                  >
                    <SessionsList
                      title="Completed Sessions"
                      sessions={completedSessions}
                      type="completed"
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <Reviews />

                  {/* Scrollable Pending Requests */}
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.dark" }}
                    >
                      Pending Requests
                    </Typography>

                    {/* Scrollable Box */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        maxHeight: 210, // Set max height for scrolling
                        overflowY: "auto", // Enable vertical scrolling
                        scrollbarWidth: "none", // Hide scrollbar for Firefox
                        "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome, Safari
                      }}
                    >
                      {/* Sample Pending Requests */}
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          bgcolor: "#fff7ed",
                          borderColor: "#fed7aa",
                          boxSizing: "border-box", // Prevent overflow due to padding
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                          Biology Grade 12
                        </Typography>
                        <Button
                          fullWidth
                          variant="contained"
                          color="warning"
                          size="small"
                        >
                          View
                        </Button>
                      </Paper>

                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          bgcolor: "#fff7ed",
                          borderColor: "#fed7aa",
                          boxSizing: "border-box", // Prevent overflow due to padding
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                          Commerce Grade 10
                        </Typography>
                        <Button
                          fullWidth
                          variant="contained"
                          color="warning"
                          size="small"
                        >
                          View
                        </Button>
                      </Paper>

                      {/* Add more pending requests dynamically as needed */}
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
            <RequestSession />
          </Container>

          <Footer />
        </Box>
        
      </div>
    </div>
  );
}

export default SclDashboard;
