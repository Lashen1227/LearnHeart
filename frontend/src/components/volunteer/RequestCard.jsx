import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';

const RequestCard = ({ request, refreshRequests }) => {

    console.log("Request Card: ", request);

    const handleCloseRequest = async () => {
        try {
          const response = await fetch("http://localhost:3001/api/volunteers/close", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ requestId: request._id }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            alert("Request closed successfully.");
            refreshRequests();
          } else {
            alert("Failed to accept the request.");
          }
        } catch (error) {
          console.error("Error accepting the request:", error);
          alert("An error occurred while accepting the request.");
        }
      };

  // Function to format the date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);
    return `${formattedDate} at ${formattedTime}`;
  };


};



export default RequestCard;