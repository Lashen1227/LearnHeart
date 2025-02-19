import Footer from "../../components/Footer";
import SclHeader from "../../components/school/SclHeader";

import { Container, Grid, Box, Paper, Typography, Button } from "@mui/material";
import { SchoolProfile } from "../../components/school/SchoolProfile";
import { SessionsList } from "../../components/school/SessionsList";
//import { Reviews } from "../../components/school/Reviews";
import { RequestSession } from "../../components/school/RequestSession";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function SclDashboard() {
  const [completedSessions, setCompletedSessions] = useState([]);
  const [scheduledSessions, setScheduledSessions] = useState([]);
  const { user, isLoaded } = useUser(); //get the currnt user from clerk

  const matchingCompletedSessions = completedSessions.find(
    (cSessions) => cSessions.schoolId === user?.id
  );
  const matchingScheduledSessions = scheduledSessions.find(
    (sSessions) => sSessions.schoolId === user?.id
  );

  useEffect(() => {
    const fetchCompletedSessions = async () => {
      try {
        const response1 = await axios.get(
          "http://localhost:3001/api/seminars/past"
        );
        setCompletedSessions(response1.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchScheduledSessions = async () => {
      try {
        const response2 = await axios.get(
          "http://localhost:3001/api/seminars/upcoming"
        );
        setScheduledSessions(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompletedSessions();
    fetchScheduledSessions();
  }, []);
  console.log(completedSessions);
  console.log(scheduledSessions);

  if (!isLoaded || completedSessions.length === 0) {
    return <p>Loading...</p>;
  }
  if (!isLoaded || scheduledSessions.length === 0) {
    return <p>Loading...</p>;
  }

  // const scheduledSessions = [
  //   {
  //     id: "1",
  //     subject: "Mathematics",
  //     date: "2024-03-15",
  //     time: "10:00 AM",
  //     status: "scheduled",
  //   },
  //   {
  //     id: "2",
  //     subject: "Physics",
  //     date: "2024-03-16",
  //     time: "2:00 PM",
  //     status: "scheduled",
  //   },
  // ];

  // const completedSessions = [
  //   {
  //     id: "3",
  //     subject: "Chemistry",
  //     date: "2024-03-10",
  //     time: "11:00 AM",
  //     status: "completed",
  //   },
  //   {
  //     id: "4",
  //     subject: "Biology",
  //     date: "2024-03-09",
  //     time: "3:00 PM",
  //     status: "completed",
  //   },
  // ];
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
          <Container maxWidth="xl" sx={{ py: 10 }}>
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={11} md={3} lg={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <SchoolProfile />
                </Box>
              </Grid>

              {/* Middle Column */}
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    pb: 4,
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      maxHeight: 300,
                      overflowY: "auto",
                      scrollbarWidth: "none",
                      "&::-webkit-scrollbar": { display: "none" },
                    }}
                  >
                    <SessionsList
                      title="Scheduled Sessions"
                      sessions={matchingScheduledSessions}
                      type="scheduled"
                    />
                  </Box>

                  <Box
                    sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      maxHeight: 300,
                      overflowY: "auto",
                      scrollbarWidth: "none",
                      "&::-webkit-scrollbar": { display: "none" },
                    }}
                  >
                    <SessionsList
                      title="Completed Sessions"
                      sessions={matchingCompletedSessions}
                      type="completed"
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={3} lg={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {/* <Reviews /> */}
                  {/* Scrollable Pending Requests */}
                  <Paper elevation={3} sx={{ p: 3 }}>
                    {/* <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.dark" }}
                    >
                      Pending Requests
                    </Typography> */}

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        maxHeight: 210,
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                      }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          bgcolor: "#fff7ed",
                          borderColor: "#fed7aa",
                          boxSizing: "border-box",
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
                          boxSizing: "border-box",
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
            <RequestSession />
          </Container>

          <Footer />
        </Box>
      </div>
    </div>
  );
}

export default SclDashboard;
