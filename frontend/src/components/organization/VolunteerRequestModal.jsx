import { Modal, Box, Typography, Avatar, TextField, InputLabel, CardActions, Button } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import PropTypes from "prop-types";

const VolunteerRequestModal = ({ open, handleClose, selectedRequest, handleAccept, handleReject }) => {

  const handleViewCV = () => {
    if (selectedRequest && selectedRequest.cv) {
      // Construct the full URL to the CV file
      const cvUrl = `http://localhost:3001/${selectedRequest.cv.replace(/\\/g, '/')}`;
      // Open the URL in a new tab
      window.open(cvUrl, '_blank');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 'fit-content',
        bgcolor: 'background.paper',
        borderRadius: 5,
        p: 4,
      }}>
        {selectedRequest && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "#3657ad", width: 100, height: 100, border: '0 4px 8px rgba(0, 0, 0, 0.2)', fontSize: '2rem' }}>
              {selectedRequest.volunteerDetails.name.charAt(0)}
            </Avatar>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 1, fontWeight: 600 }}>
              {selectedRequest.volunteerDetails.name}
            </Typography>
            <Typography id="modal-modal-description" variant="body1" sx={{ fontWeight: 500 }}>
              Address: {selectedRequest.volunteerDetails.address}
            </Typography>
            <Typography id="modal-modal-description" variant="body1" sx={{ fontWeight: 500 }}>
              Contact No: {selectedRequest.volunteerDetails.phoneNumber}
            </Typography>
            <Box sx={{ width: '100%', mb: 2, mt: 2 }}>
              <InputLabel htmlFor="modal-modal-qualifications" sx={{ color: 'black', fontSize: '1.1rem', fontWeight: 600, mb: 1, ml: 1 }}>Education / Work Qualifications</InputLabel>
              <TextField
                id="modal-modal-qualifications"
                variant="outlined"
                value={selectedRequest.qualifications}
                disabled
                fullWidth
                InputProps={{
                  style: { height: 40 }, // Adjust the height of the input field
                }}
                sx={{
                  '& .MuiInputBase-input.Mui-disabled': {
                    color: 'black',
                    WebkitTextFillColor: 'black',
                  },
                }}
              />
            </Box>
            <Box sx={{ width: '100%', mb: 2 }}>
              <InputLabel htmlFor="modal-modal-language" sx={{ color: 'black', fontSize: '1.1rem', fontWeight: 600, mb: 1, ml: 1 }}>Language Proficiency</InputLabel>
              <TextField
                id="modal-modal-language"
                variant="outlined"
                value={selectedRequest.language}
                disabled
                fullWidth
                InputProps={{
                  style: { height: 40 }, // Adjust the height of the input field
                }}
                sx={{
                  '& .MuiInputBase-input.Mui-disabled': {
                    color: 'black',
                    WebkitTextFillColor: 'black',
                  },
                }}
              />
            </Box>
            <Box sx={{ width: '100%', mb: 2 }}>
              <InputLabel htmlFor="modal-modal-subjects" sx={{ color: 'black', fontSize: '1.1rem', fontWeight: 600, mb: 1, ml: 1 }}>Teaching Subjects</InputLabel>
              <TextField
                id="modal-modal-subjects"
                variant="outlined"
                value={selectedRequest.subjects}
                disabled
                fullWidth
                InputProps={{
                  style: { height: 40 }, // Adjust the height of the input field
                }}
                sx={{
                  '& .MuiInputBase-input.Mui-disabled': {
                    color: 'black',
                    WebkitTextFillColor: 'black',
                  },
                }}
              />
            </Box>
            <Box sx={{ width: '100%', mb: 2 }}>
              <InputLabel htmlFor="modal-modal-availableDates" sx={{ color: 'black', fontSize: '1.1rem', fontWeight: 600, mb: 1, ml: 1 }}>Available Dates</InputLabel>
              <TextField
                id="modal-modal-availableDates"
                variant="outlined"
                value={selectedRequest.availableDates.join(", ")}
                disabled
                fullWidth
                InputProps={{
                  style: { height: 40 }, // Adjust the height of the input field
                }}
                sx={{
                  '& .MuiInputBase-input.Mui-disabled': {
                    color: 'black',
                    WebkitTextFillColor: 'black',
                  },
                }}
              />
            </Box>
            <CardActions sx={{ justifyContent: "flex-end", gap: 1, mt: 2 }}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleViewCV}
              >
                View and Download CV
              </Button>
              <Button
                size="small"
                variant="contained"
                color="success"
                startIcon={<CheckCircle />}
                onClick={handleAccept}
              >
                Accept
              </Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                startIcon={<Cancel />}
                onClick={handleReject}
              >
                Reject
              </Button>
            </CardActions>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

VolunteerRequestModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  selectedRequest: PropTypes.shape({
    qualifications: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    subjects: PropTypes.string.isRequired,
    availableDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    cv: PropTypes.string.isRequired,
    volunteerDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }),
  handleAccept: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired,
};

export default VolunteerRequestModal;