import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, Button, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUser } from "@clerk/clerk-react";

const RequestedSessions = () => {
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  
  const user = useUser().user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orgResponse = await axios.get("http://localhost:3001/api/organizations");
        setOrganizations(orgResponse.data);
        
        const schoolResponse = await axios.get("http://localhost:3001/api/schools");
        setSchools(schoolResponse.data);
        
        const seminarResponse = await axios.get("http://localhost:3001/api/seminars");
        setSeminars(seminarResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!seminars.length || !schools.length || !organizations.length) return;

    const currentOrganization = organizations.find(org => org.userID === user?.id);
    if (!currentOrganization) return;

    const combinedSessions = seminars.filter(seminar => seminar.organizationId === currentOrganization._id && seminar.status === "pending")
      .map(seminar => {
        const school = schools.find(sch => sch._id === seminar.schoolId);
        return {
          ...seminar,
          schoolName: school?.name || "Unknown School",
          schoolAddress: school?.address || "Unknown Address",
        };
      });

    setFilteredSessions(combinedSessions);
  }, [seminars, schools, organizations, user]);

  const handleAccept = async (seminarId) => {
    try {
      await axios.put(`http://localhost:3001/api/seminars/${seminarId}`, { status: "accepted" });
      setFilteredSessions(prev => prev.filter(seminar => seminar._id !== seminarId));
    } catch (error) {
      console.error("Error accepting seminar:", error);
    }
  };

  const handleReject = async (seminarId) => {
    try {
      await axios.put(`http://localhost:3001/api/seminars/${seminarId}`, { status: "rejected" });
      setFilteredSessions(prev => prev.filter(seminar => seminar._id !== seminarId));
    } catch (error) {
      console.error("Error rejecting seminar:", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ bgcolor: "#4db6ac", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Requested Sessions
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <Card key={session._id} variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body2" fontWeight="bold">
                      {new Date(session.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {session.schoolName} - {session.schoolAddress}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      startIcon={<CheckCircleIcon />}
                      onClick={() => handleAccept(session._id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      startIcon={<CancelIcon />}
                      onClick={() => handleReject(session._id)}
                    >
                      Reject
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography textAlign="center">No seminar requests available.</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default RequestedSessions;
