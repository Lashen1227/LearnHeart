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



};

export default PastEventsPage; 