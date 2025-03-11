import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Rating,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Chip,
    Divider
} from '@mui/material';
import { format } from 'date-fns';
import CommentIcon from '@mui/icons-material/Comment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PastEventsPage = () => {
    const { user } = useUser();
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [reviewDialog, setReviewDialog] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

    useEffect(() => {
        fetchEvents();
    }, [user]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/past-events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleAddReview = (event) => {
        setSelectedEvent(event);
        setReviewDialog(true);
    };

    const handleSubmitReview = async () => {
        try {
            await axios.post(`http://localhost:3001/api/past-events/${selectedEvent._id}/reviews`, {
                ...newReview,
                userId: user.id
            });
            setReviewDialog(false);
            setNewReview({ rating: 0, comment: '' });
            fetchEvents();
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return sum / reviews.length;
    };

    return (
        <div>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 12 }}>
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item xs={12} md={6} key={event._id}>
                        <Card sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6,
                                transition: 'all 0.3s ease-in-out'
                            }
                        }}>
                            <Box sx={{ 
                                position: 'relative', 
                                pt: '56.25%',
                                overflow: 'hidden',
                                borderRadius: '12px 12px 0 0'
                            }}>
                                {event.images && event.images.length > 0 && (
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'grid',
                                        gap: '4px',
                                        padding: '4px',
                                        gridTemplateColumns: event.images.length === 1 ? '1fr' :
                                            event.images.length === 2 ? '1fr 1fr' :
                                            event.images.length === 3 ? '2fr 1fr' :
                                            '1fr 1fr',
                                        gridTemplateRows: event.images.length <= 2 ? '1fr' :
                                            '1fr 1fr',
                                        bgcolor: 'background.paper'
                                    }}>
                                        {event.images.slice(0, 4).map((image, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    gridColumn: event.images.length === 3 && index === 0 ? 'span 2' : 'span 1',
                                                    overflow: 'hidden',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        '& .MuiCardMedia-root': {
                                                            transform: 'scale(1.1)',
                                                            transition: 'transform 0.3s ease-in-out'
                                                        },
                                                        '&::after': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                            transition: 'background-color 0.3s ease-in-out'
                                                        }
                                                    }
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image={image}
                                                    alt={`${event.schoolName} - Image ${index + 1}`}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease-in-out'
                                                    }}
                                                />
                                                {index === 3 && event.images.length > 4 && (
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                            color: 'white',
                                                            fontSize: '1.5rem',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(0, 0, 0, 0.8)'
                                                            }
                                                        }}
                                                    >
                                                        +{event.images.length - 4}
                                                    </Box>
                                                )}
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {event.schoolName}
                                </Typography>

                                <Typography color="textSecondary" paragraph>
                                    {event.location}
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Chip label={`Grade ${event.grade}`} sx={{ mr: 1 }} />
                                    <Chip label={event.subject} />
                                </Box>
                                <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
                                    Hosted by: {event.organizationName}
                                </Typography>
                                <Typography variant="body2" paragraph>
                                    Date: {format(new Date(event.seminarDate), 'MMMM dd, yyyy')}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Average Rating:
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Rating 
                                            value={calculateAverageRating(event.reviews)} 
                                            readOnly 
                                            precision={0.5}
                                        />
                                        <Typography variant="body2" sx={{ ml: 1 }}>
                                            ({event.reviews?.length || 0} reviews)
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        startIcon={<CommentIcon />}
                                        onClick={() => handleAddReview(event)}
                                        sx={{ mt: 1 }}
                                    >
                                        Add Review
                                    </Button>
                                </Box>

                                {event.reviews && event.reviews.length > 0 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Recent Reviews:
                                        </Typography>
                                        {event.reviews.slice(0, 2).map((review, index) => (
                                            <Box key={index} sx={{ mb: 1 }}>
                                                <Rating value={review.rating} readOnly size="small" />
                                                <Typography variant="body2">{review.comment}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </CardContent>
                        </Card> 
                    </Grid>
                ))}
            </Grid>

            {/* Review Dialog */}
            <Dialog open={reviewDialog} onClose={() => setReviewDialog(false)}>
                <DialogTitle>Add Review</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            value={newReview.rating}
                            onChange={(_, value) => setNewReview({ ...newReview, rating: value })}
                            size="large"
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Your Review"
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            sx={{ mt: 2 }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setReviewDialog(false)}>Cancel</Button>
                    <Button onClick={handleSubmitReview} variant="contained">
                        Submit Review
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        <Footer />
        </div>
    );
};

export default PastEventsPage; 