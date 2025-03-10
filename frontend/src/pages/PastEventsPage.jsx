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

};

export default PastEventsPage; 