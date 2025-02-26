// import { useState, useEffect } from "react";
// import {
//   Card,
//   Typography,
//   Box,
//   Button,
//   Paper,
//   Modal,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import AddResource from "../../pages/resourceBankPages/AddResource";
// import { useUser } from "@clerk/clerk-react";
// import axios from "axios";

// function VolLastbar() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   async function fetchRequests() {
//     if (!user?.id) return;
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/volunteers/volunteer-requests",
//         { userId: user.id }
//       );
//       console.log("API Response:", response.data);
//       console.log("Sample request date:", response.data[0]?.requestedDate); // Debug line
//       setRequests(response.data);
//     } catch (error) {
//       console.error("Error fetching requests:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (user?.id) {
//       fetchRequests();
//       // Removed the interval to prevent flickering
//     }
//   }, [user?.id]);

//   const handleRemoveRequest = async (requestId, e) => {
//     if (e) {
//       e.stopPropagation(); // Prevent event bubbling
//     }
    
//     try {
//       // Make API call to delete the request
//       const response = await axios.delete(`http://localhost:3001/api/volunteers/delete-request/${requestId}`);
      
//       if (response.status === 200) {
//         // Update local state after successful deletion
//         setRequests(prevRequests => 
//           prevRequests.filter(request => request._id !== requestId)
//         );
//       }
//     } catch (error) {
//       console.error("Error deleting request:", error);
//     }
//   };

//   return (
//     <Box className="flex flex-col gap-6">
//       {/* Pending Requests Section */}
//       <Card
//         style={{
//           backgroundColor: "#2aaa94",
//           padding: "1.5rem",
//           borderRadius: "0.75rem",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         }}
//         className="flex flex-col items-center"
//       >
//         <Typography
//           variant="h6"
//           className="text-black font-semibold"
//           style={{
//             fontSize: "1.2rem",
//             marginBottom: "1.5rem",
//           }}
//         >
//           Pending Requests
//         </Typography>

//         {/* Scrollable requests container */}
//         <div
//           className="w-full h-[400px] overflow-y-auto"
//           style={{
//             overflowY: "auto",
//             scrollbarWidth: "thin",
//             scrollbarColor: "#ccc transparent",
//             msOverflowStyle: "none",
//           }}
//         >
//           <style>
//             {`
//               div::-webkit-scrollbar {
//                 width: 6px;
//               }
//               div::-webkit-scrollbar-thumb {
//                 background-color: #ccc;
//                 border-radius: 10px;
//               }
//               div::-webkit-scrollbar-track {
//                 background: transparent;
//               }
//             `}
//           </style>
//           {loading ? (
//             <div className="text-center py-4 text-gray-100">Loading...</div>
//           ) : requests.length === 0 ? (
//             <div className="text-center py-4">
//               <Typography variant="subtitle1">
//                 No pending requests
//               </Typography>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {requests.map((request) => (
//                 <div
//                   key={request._id}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "1rem",
//                     position: "relative",
//                   }}
//                 >
//                   {/* Organization Details */}
//                   <div style={{ flex: 1 }}>
//                     <Typography
//                       variant="h6"
//                       className="font-medium text-gray-900"
//                     >
//                       {request.organizationName}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       className="text-sm text-gray-600 mt-1"
//                     >
//                       {request.subjects}
//                     </Typography>
//                     <small className="text-gray-500">
//                       Requested on: {request.requestedDate ? new Date(request.requestedDate).toLocaleDateString() : 'Date not available'}
//                     </small>
//                   </div>

//                   {/* Status Tag */}
//                   <div style={{ marginRight: "50px" }}>
//                     <span
//                       className={`text-xs px-3 py-1 rounded-full ${
//                         request.isAccepted
//                           ? "bg-green-200 text-green-800"
//                           : request.isPending
//                           ? "bg-blue-200 text-blue-800"
//                           : "bg-red-200 text-red-800"
//                       }`}
//                       style={{
//                         fontWeight: "bold",
//                         border: "1px solid rgba(0, 0, 0, 0.2)",
//                       }}
//                     >
//                       {request.isAccepted
//                         ? "Approved"
//                         : request.isPending
//                         ? "Pending"
//                         : "Rejected"}
//                     </span>
//                   </div>

//                   {/* Remove Button - Fixed Positioning */}
//                   {!request.isPending && (
//                     <IconButton
//                       onClick={(e) => handleRemoveRequest(request._id, e)}
//                       style={{
//                         position: "absolute",
//                         top: "10px",
//                         right: "10px",
//                         backgroundColor: "rgba(255, 0, 0, 0.1)",
//                         color: "red",
//                         width: "30px",
//                         height: "30px",
//                         zIndex: 10,
//                       }}
//                       size="small"
//                     >
//                       <CloseIcon fontSize="small" />
//                     </IconButton>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </Card>

//       {/* Add Resources Section */}
//       <Paper
//         elevation={3}
//         style={{
//           padding: "1.5rem",
//           borderRadius: "0.5rem",
//           textAlign: "center",
//           backgroundColor: "#4db6ac",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <Typography variant="h6" style={{ color: "white" }}>
//           Add Resources
//         </Typography>
//         <Typography
//           variant="body2"
//           mt={2}
//           style={{ fontStyle: "italic", fontSize: "1rem", color: "#f5f5f5" }}
//         >
//           Contribute educational resources to LearnHeart, enhancing access and
//           opportunities for students worldwide.
//         </Typography>
//         <Button
//           variant="contained"
//           color="warning"
//           sx={{ mt: 2 }}
//           onClick={() => setIsModalOpen(true)}
//           style={{
//             backgroundColor: "#FF9800",
//             color: "white",
//             fontWeight: "bold",
//             textTransform: "none",
//           }}
//         >
//           Publish
//         </Button>
//       </Paper>

//       {/* Modal for Adding Resources */}
//       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <Box
//           position="absolute"
//           top="50%"
//           left="50%"
//           style={{
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "#EAEFFB",
//             padding: "1.5rem",
//             borderRadius: "0.5rem",
//             width: "50%",
//             boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//           }}
//         >
//           <IconButton
//             style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <CloseIcon />
//           </IconButton>
//           <AddResource />
//         </Box>
//       </Modal>
//     </Box>
//   );
// }

// export default VolLastbar;


import { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Box,
  Button,
  Paper,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddResource from "../../pages/resourceBankPages/AddResource";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

function VolLastbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  async function fetchRequests() {
    if (!user?.id) return;
    try {
      const response = await axios.post(
        "http://localhost:3001/api/volunteers/volunteer-requests-by-user-id",
        { userId: user.id }
      );
      console.log("API Response:", response.data);
      console.log("Sample updated date:", response.data[0]?.updatedAt); // Debug line
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user?.id) {
      fetchRequests();
    }
  }, [user?.id]);

  const handleRemoveRequest = async (requestId, e) => {
    if (e) e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/volunteers/delete-request/${requestId}`
      );
      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== requestId)
        );
      }
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  return (
    <Box className="flex flex-col gap-6">
      {/* Pending Requests Section */}
      <Card
        style={{
          backgroundColor: "#2aaa94",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        className="flex flex-col items-center"
      >
        <Typography
          variant="h6"
          className="text-black font-semibold"
          style={{
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
          }}
        >
          Pending Requests
        </Typography>

        {/* Scrollable requests container */}
        <div
          className="w-full h-[400px] overflow-y-auto"
          style={{
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "#ccc transparent",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                width: 6px;
              }
              div::-webkit-scrollbar-thumb {
                background-color: #ccc;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
            `}
          </style>
          {loading ? (
            <div className="text-center py-4 text-gray-100">Loading...</div>
          ) : requests.length === 0 ? (
            <div className="text-center py-4">
              <Typography variant="subtitle1">
                No pending requests
              </Typography>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem",
                    position: "relative",
                  }}
                >
                  {/* Organization Details */}
                  <div style={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      className="font-medium text-gray-900"
                    >
                      {request.organizationName}
                    </Typography>
                    <small className="text-gray-500">
                      Updated on:{" "}
                      {request.updatedAt
                        ? new Date(request.updatedAt).toLocaleDateString()
                        : "Date not available"}
                    </small>
                  </div>

                  {/* Status Tag */}
                  <div style={{ marginRight: "50px" }}>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        request.isAccepted
                          ? "bg-green-200 text-green-800"
                          : request.isPending
                          ? "bg-blue-200 text-blue-800"
                          : "bg-red-200 text-red-800"
                      }`}
                      style={{
                        fontWeight: "bold",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {request.isAccepted
                        ? "Approved"
                        : request.isPending
                        ? "Pending"
                        : "Rejected"}
                    </span>
                  </div>

                  {/* Remove Button */}
                  {!request.isPending && (
                    <IconButton
                      onClick={(e) => handleRemoveRequest(request._id, e)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "rgba(255, 0, 0, 0.1)",
                        color: "red",
                        width: "30px",
                        height: "30px",
                        zIndex: 10,
                      }}
                      size="small"
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Add Resources Section */}
      <Paper
        elevation={3}
        style={{
          padding: "1.5rem",
          borderRadius: "0.5rem",
          textAlign: "center",
          backgroundColor: "#4db6ac",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          Add Resources
        </Typography>
        <Typography
          variant="body2"
          mt={2}
          style={{ fontStyle: "italic", fontSize: "1rem", color: "#f5f5f5" }}
        >
          Contribute educational resources to LearnHeart, enhancing access and
          opportunities for students worldwide.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 2 }}
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#FF9800",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Publish
        </Button>
      </Paper>

      {/* Modal for Adding Resources */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          style={{
            transform: "translate(-50%, -50%)",
            backgroundColor: "#EAEFFB",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            width: "50%",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <IconButton
            style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            onClick={() => setIsModalOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <AddResource />
        </Box>
      </Modal>
    </Box>
  );
}

export default VolLastbar;