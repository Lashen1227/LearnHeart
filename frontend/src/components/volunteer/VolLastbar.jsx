import { useState } from 'react';
import { Card, Typography, Box, Button, Paper, Modal, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import AddResource from "../../pages/resourceBankPages/AddResource";

function VolLastbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <Box className="flex flex-col gap-4">
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    backgroundColor: '#4db6ac',
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" sx={{ color: 'black'}}>
                    Pending Requests
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center', color: 'black' }}>
                    Pending join with org requests cards need to display here
                </Typography>
            </Card>


            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: "center", bgcolor: "#4db6ac" }}>
                <Typography variant="h6">Add Resources</Typography>
                <Typography variant="body2" mt={2} style={{ fontStyle: 'italic' }}>
                Contribute educational resources to LearnHeart, enhancing access and opportunities for students worldwide.
                </Typography>
                <Button variant="contained" color="warning" sx={{ mt: 2 }} onClick={() => setIsModalOpen(true)}>
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
        </Box>
    );
}

export default VolLastbar;
