import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, Chip, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SeminarStatus = () => {
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const user = useUser().user;

  // Define status to color mapping
  const statusColorMapping = {
    "completed": "success",
    "accepted": "info",
    "pending": "secondary",
    "rejected": "error",
  };

  // Function to handle closing a seminar card
  const handleCloseCard = (id) => {
    setFilteredSessions((prevSessions) =>
      prevSessions.filter((session) => session._id !== id)
    );
  };

  // Function to process the seminar date
  const ProcessDate = (seminar) => {
    const date = seminar.expDate ? new Date(seminar.expDate) : null;
    return (
      date
        ?.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replaceAll("/", ".") || "N/A"
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [seminarResponse, schoolResponse] = await Promise.all([
          axios.get("http://localhost:3001/api/seminars"),
          axios.get("http://localhost:3001/api/schools"),
        ]);

        setSeminars(seminarResponse.data);
        setSchools(schoolResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!seminars.length || !schools.length) return;

    // Get school from Clerk's user object
    const matchingSchool = schools.find((sch) => sch.userID === user?.id);

    // Find the specific seminars for the school
    const currentSchoolSeminars = seminars
      .filter((seminar) => seminar.schoolId === matchingSchool?._id)
      .map((seminar) => ({
        ...seminar,
        schoolName: matchingSchool?.schoolName,
        schoolAddress: matchingSchool?.address,
        schoolPhoneNumber: matchingSchool?.contact,
        schoolEmail: matchingSchool?.email,
        schoolWebsite: matchingSchool?.website,
      }));

    setFilteredSessions(currentSchoolSeminars);
  }, [seminars, schools, user?.id]);

  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: "#4db6ac",
        p: 3,
        borderRadius: 2,
        maxHeight: 630,
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Typography
        variant="h6"
        mb={2}
        sx={{ textAlign: "center", color: "black" }}
      >
        Seminar Status
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <Card
              key={session._id}
              variant="outlined"
              sx={{ position: "relative" }}
            >
              <CardContent><br />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                  mb={1}
                >
                  <Box>
                    <Typography variant="body2" fontWeight="bold">
                      {session.organization}
                    </Typography>
                    <Typography variant="body2">
                      Subject: {session.subject} | Grade: {session.grade}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Date: {ProcessDate(session)}
                    </Typography>
                  </Box>
                  {session.status && (
                    <Chip
                      label={session.status}
                      color={statusColorMapping[session.status] || "default"}
                      size="small"
                    />
                  )}
                  {/* Close button */}
                  <IconButton
                    onClick={() => handleCloseCard(session._id)}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 8,
                        padding: '2px',
                        fontSize: '1px',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            fontWeight="bold"
          >
            No seminar status available.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

SeminarStatus.propTypes = {
  title: PropTypes.string,
  sessions: PropTypes.array,
  handleComplete: PropTypes.func,
};

export default SeminarStatus;
