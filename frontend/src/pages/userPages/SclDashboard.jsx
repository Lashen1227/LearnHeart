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
        <SclHeader />
        <Box
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #e0f2fe, #e0e7ff)",
          }}
        >
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <SchoolProfile />
                  <RequestSession />
                </Box>
              </Grid>

              {/* Middle Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <SessionsList
                    title="Scheduled Sessions"
                    sessions={scheduledSessions}
                    type="scheduled"
                  />
                  <SessionsList
                    title="Completed Sessions"
                    sessions={completedSessions}
                    type="completed"
                  />
                </Box>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <Reviews />
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.dark" }}
                    >
                      Pending Requests
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          bgcolor: "#fff7ed",
                          borderColor: "#fed7aa",
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
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Footer />
        </Box>
        <Footer />
      </div>
    </div>
  );
}

export default SclDashboard;
