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