import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
    MobileStepper,
    Button,
} from '@mui/material';
import {
    Close as CloseIcon,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

const ImageGallery = ({ images, open, onClose, initialImageIndex = 0 }) => {
    const [activeStep, setActiveStep] = useState(initialImageIndex);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    if (!images || images.length === 0) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: 'background.paper',
                    position: 'relative',
                }
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                    zIndex: 1,
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0, position: 'relative', height: '80vh' }}>
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: 'black',
                    }}
                >
                    <img
                        src={images[activeStep]}
                        alt={`Event image ${activeStep + 1}`}
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Box>

                <MobileStepper
                    steps={images.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                    }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === images.length - 1}
                            sx={{ color: 'white' }}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            sx={{ color: 'white' }}
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </DialogContent>
        </Dialog>
    );
};

export default ImageGallery; 