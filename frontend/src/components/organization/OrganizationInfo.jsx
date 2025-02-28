import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Box, Button, Typography, Paper, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddResource from "../../pages/resourceBankPages/AddResource";
import CreatePost from "../../components/communityForm/CreatePost";
import PastEventShareForm from "../../pages/PastEventShareForm";

const OrganizationInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    
    const [organizations, setOrganizations] = useState([])
    const user = useUser().user;
    console.log(user?.id)

    const clarkId = organizations.find((org) => org.userID === user?.id);
    console.log(clarkId);
    console.log(organizations);
    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/organizations");
                setOrganizations(response.data);
            } catch (error) {
                console.error("Error fetching organizations:", error);
            }
        };
        fetchOrganizations();
    }, []);

    
  return (
    <div className="min-h-screen bg-custom-page">
        <div className="p-20 text-white rounded-lg bg-custom-blue">
            <div className="flex flex-col items-center justify-center flex-grow pointer-events-none">
                    <UserButton 
                        appearance={{ 
                            elements: { 
                                userButtonAvatarBox: "w-24 h-24 md:w-32 md:h-32",
                                userButtonAvatarImage: "w-full h-full object-cover"
                            } 
                        }} 
                    />
                    <h2 className="mt-4 text-lg font-semibold text-center md:text-xl">{clarkId?.name}</h2>
                    <p className="px-4 mt-2 text-sm text-center md:text-base md:px-6">
                        {clarkId?.description}<br /><br />
                    </p>
            </div>
            
            <div className="flex flex-col items-center w-full pb-6 mt-4 space-y-3">
                {/* Button Group - Placed in a Flex Row */}
                <div className="flex justify-center space-x-4 width-full">
                    <button className="px-3 py-2 duration-300 bg-white border rounded-xl hover:scale-105 hover:bg-blue-50 text-custom-blue">
                        Verify Skills
                    </button>
                    <button className="px-3 py-2 duration-300 bg-white border rounded-xl hover:scale-105 hover:bg-blue-50 text-custom-blue" onClick={() => setIsPostModalOpen(true)}>
                        Share Announcements
                    </button>

                    <Modal open={isPostModalOpen} onClose={() => setIsPostModalOpen(false)}>
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            sx={{
                                transform: "translate(-50%, -50%)",
                                bgcolor: "#EAEFFB",
                                p: 3,
                                borderRadius: 2,
                                width: "50%",
                                maxHeight: "80vh",
                                overflowY: "auto",
                            }}
                        >
                            <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={() => setIsPostModalOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                            <CreatePost />
                        </Box>
                    </Modal>

                </div>
                
                <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 duration-300 bg-white border rounded-xl hover:scale-105 hover:bg-blue-50 text-custom-blue"  onClick={() => setIsEventModalOpen(true)}>
                        Share Past Events
                    </button>
                    {/* Back to Home Button */}
                    <button className="px-4 py-2 text-white duration-300 border rounded-xl hover:scale-105 bg-custom-orange hover:bg-orange-600">
                        <Link to="/">Back to Home</Link>
                    </button>

                    <Modal open={isEventModalOpen} onClose={() => setIsEventModalOpen(false)}>
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            sx={{
                                transform: "translate(-50%, -50%)",
                                bgcolor: "#EAEFFB",
                                p: 3,
                                borderRadius: 2,
                                width: "50%",
                                maxHeight: "80vh",
                                overflowY: "auto",
                            }}
                        >
                            <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={() => setIsEventModalOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                            <PastEventShareForm />
                        </Box>
                    </Modal>
                </div>

                
            </div>

        </div>

        <div className="container grid grid-cols-1 gap-6 py-6">
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: "center", bgcolor: "#4db6ac" }}>
              <Typography variant="h6">Add Resources</Typography>
              <Typography variant="body2" mt={2} style={{ fontStyle: 'italic' }}>
                Contribute educational resources to LearnHeart, enhancing access and opportunities for students worldwide.
              </Typography>
              <Button variant="contained" color="warning" sx={{ mt: 2 }}  onClick={() => setIsModalOpen(true)}>
                Publish
              </Button>
            </Paper>
            
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)", bgcolor: "#EAEFFB", p: 3, borderRadius: 2, width: "50%" }}>
                <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={() => setIsModalOpen(false)}>
                  <CloseIcon />
                </IconButton>
                <AddResource />
              </Box>
            </Modal>
        </div>
    </div>

  );
};

export default OrganizationInfo;