import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, Button, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const RequestedSessions = ({ sessions }) => {
  return (
    <Paper elevation={3} sx={{ bgcolor: "#4db6ac", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Requested Sessions
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {sessions.map((session, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="body2" fontWeight="bold">
                    {session.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {session.school}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    startIcon={<CheckCircleIcon />}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  );
};

RequestedSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RequestedSessions;