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
        const [orgResponse, schoolResponse, seminarResponse] = await Promise.all([
          axios.get("http://localhost:3001/api/organizations"),
          axios.get("http://localhost:3001/api/schools"),
          axios.get("http://localhost:3001/api/seminars")
        ]);

        setOrganizations(orgResponse.data);
        setSchools(schoolResponse.data);
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

    const combinedSessions = seminars
      .filter(seminar => seminar.organizationId === currentOrganization._id && seminar.status === "pending")
      .map(seminar => {
        const school = schools.find(sch => sch._id === seminar.schoolId);
        return {
          ...seminar,
          schoolName: school?.schoolName,
          schoolAddress: school?.address,
          schoolEmail: school?.email,
          schoolWebsite: school?.website,
          schoolPhoneNumber: school?.contact
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
      <Box sx={{ maxHeight: 400, overflowY: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <Card key={session._id} variant="outlined" sx={{ mb: 2, maxHeight: 200 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body2" fontWeight="bold">
                      {session.schoolName} - {session.schoolAddress}
                    </Typography>
                    <Typography variant="body2">
                      Subject: {session.subject} | Grade: {session.grade}
                    </Typography>
                    <Typography variant="body2">
                      Medium: {session.medium}
                    </Typography>
                    <Typography variant="body2">
                      Date: {new Date(session.expDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Expected Teachers Count: {session.expTeacherCount}
                    </Typography>
                    <Typography variant="body2">
                      Number of Students: {session.expStudentCount}
                    </Typography>
                    <Typography variant="body2">
                      Contact: {session.schoolPhoneNumber} | {session.schoolEmail}
                    </Typography>
                    <Typography variant="body2">
                      Additional Requests: {session.additionalRequests}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} flexDirection="column">
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
          <Typography Typography variant="body2" color="text.secondary" textAlign="center" fontWeight="bold">
            No seminar requests available.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default RequestedSessions;