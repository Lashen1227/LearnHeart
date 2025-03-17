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
    Divider,
    IconButton,
    InputAdornment,
    Alert
} from '@mui/material';
import { format } from 'date-fns';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import ReviewList from '../components/ReviewList';
import ImageGallery from '../components/ImageGallery';
import { LocationOn, Event, School, Group } from '@mui/icons-material';

const PastEventsPage = () => {
    const { user } = useUser();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [reviewDialog, setReviewDialog] = useState(false);
    const [allReviewsDialog, setAllReviewsDialog] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
    const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false); // New state for no results message

    // New states for image preview
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedEventImages, setSelectedEventImages] = useState([]);
    const [initialImageIndex, setInitialImageIndex] = useState(0);

    const [searchParams, setSearchParams] = useState({
        date: '',
        location: '',
        host: '',
        grade: ''
    });

    useEffect(() => {
        fetchEvents();
    }, [user]);

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/past-events');
            setEvents(response.data);
            setFilteredEvents(response.data); // Initially set all events
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        let filtered = events;

        // Apply filters only if the search parameter is not empty
        if (searchParams.date) {
            filtered = filtered.filter((event) =>
                format(new Date(event.seminarDate), 'yyyy-MM-dd').includes(searchParams.date)
            );
        }
        if (searchParams.location) {
            filtered = filtered.filter((event) =>
                event.location.toLowerCase().includes(searchParams.location.toLowerCase())
            );
        }
        if (searchParams.host) {
            filtered = filtered.filter((event) =>
                event.organizationName.toLowerCase().includes(searchParams.host.toLowerCase())
            );
        }
        if (searchParams.grade) {
            filtered = filtered.filter((event) =>
                event.grade.toLowerCase().includes(searchParams.grade.toLowerCase())
            );
        }

        // Check if no events match the search criteria
        if (filtered.length === 0) {
            setNoResults(true); // Show no results message
        } else {
            setNoResults(false); // Hide no results message
        }

        setFilteredEvents(filtered);
    };

    const handleClearSearch = () => {
        setSearchParams({
            date: '',
            location: '',
            host: '',
            grade: ''
        });
        setFilteredEvents(events); // Reset to show all events
        setNoResults(false); // Hide no results message
    };

    const handleAddReview = (event) => {
        setSelectedEvent(event);
        setReviewDialog(true);
    };

    const handleSubmitReview = async () => {
        try {
            // Get user information from Clerk
            const userFullName = user.fullName || `${user.firstName} ${user.lastName}`.trim();
            const reviewData = {
                ...newReview,
                userId: user.id,
                userName: user.username || userFullName,
                userImage: user.imageUrl || user.profileImageUrl,
                createdAt: new Date().toISOString()
            };

            await axios.post(`http://localhost:3001/api/past-events/${selectedEvent._id}/reviews`, reviewData);
            setReviewDialog(false);
            setNewReview({ rating: 0, comment: '' });
            fetchEvents(); // Refresh events to show the new review
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return sum / reviews.length;
    };

    // Update the handleImageClick function
    const handleImageClick = (images, clickedImageIndex) => {
        setSelectedEventImages(images);
        setInitialImageIndex(clickedImageIndex);
        setGalleryOpen(true);
    };

    const handleViewAllReviews = (event) => {
        setSelectedEvent(event);
        setAllReviewsDialog(true);
    };

    return (
        <div>
            <Navbar />
            <Container
                        maxWidth="xl"  // Increase to 'xl' for larger screens (extra-large)
                sx={{
                    py: 12,
                    ...(loading && {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                            minHeight: 'calc(100vh - 64px - 96px)',
                            }),
                            width: '95%', // Set a custom width
                            maxWidth: '1200px', // Or, use a specific maxWidth
                }}
            >
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                       <Box
                                sx={{
                                    mb: 4,
                                    backgroundColor: '#5EA9A9',
                                    p: 2,
                                    borderRadius: '8px',
                                }}
                                >
                                <Grid container spacing={5} alignItems="center">
                                    {/* Date Input */}
                                    <Grid item xs={12} sm={2} md={2}>
                                    <TextField
                                        fullWidth
                                        label="Date"
                                        name="date"
                                        type="date"
                                        value={searchParams.date}
                                        onChange={handleSearchChange}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}                                      
                                          InputProps={{
                                        endAdornment: <InputAdornment position="end">📅</InputAdornment>,
                                        }}
                                        sx={{
                                            backgroundColor: 'white', // Set background color to white
                                            borderRadius: '10px', // Round corners
                                            '& .MuiOutlinedInput-root': {
                                              border: 'none', // Remove the default border
                                              '&:focus': {
                                                border: 'none', // Remove border when focused
                                              },
                                            },
                                            '& .MuiInputBase-input': {
                                              padding: '10px', // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </Grid>

                                   {/* Location Input */}
                                    <Grid item xs={12} sm={2} md={2}>
                                    <TextField
                                        fullWidth
                                        label="Location"
                                        name="location"
                                        value={searchParams.location}
                                        onChange={handleSearchChange}
                                        InputProps={{
                                        endAdornment: <InputAdornment position="end">📍</InputAdornment>,
                                        }}
                                        sx={{
                                            backgroundColor: 'white', // Set background color to white
                                            borderRadius: '10px', // Round corners
                                            '& .MuiOutlinedInput-root': {
                                              border: 'none', // Remove the default border
                                              '&:focus': {
                                                border: 'none', // Remove border when focused
                                              },
                                            },
                                            '& .MuiInputBase-input': {
                                              padding: '10px', // Adjust padding if needed
                                            },
                                          }}
                                    />
                                </Grid>

                                    {/* Host Input */}
                                    <Grid item xs={12} sm={2} md={2}>
                                    <TextField
                                        fullWidth
                                        label="Host"
                                        name="host"
                                        value={searchParams.host}
                                        onChange={handleSearchChange}
                                        InputProps={{
                                        endAdornment: <InputAdornment position="end">🏢</InputAdornment>,
                                        }}
                                        sx={{
                                            backgroundColor: 'white', // Set background color to white
                                            borderRadius: '10px', // Round corners
                                            '& .MuiOutlinedInput-root': {
                                              border: 'none', // Remove the default border
                                              '&:focus': {
                                                border: 'none', // Remove border when focused
                                              },
                                            },
                                            '& .MuiInputBase-input': {
                                              padding: '10px', // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </Grid>

                                    {/* Grade Input */}
                                    <Grid item xs={12} sm={2} md={2}>
                                    <TextField
                                        fullWidth
                                        label="Grade"
                                        name="grade"
                                        value={searchParams.grade}
                                        onChange={handleSearchChange}
                                        sx={{
                                            backgroundColor: 'white', 
                                            borderRadius: '10px', 
                                            '& .MuiOutlinedInput-root': {
                                              border: 'none', // Remove the default border
                                              '&:focus': {
                                                border: 'none', // Remove border when focused
                                              },
                                            },
                                            '& .MuiInputBase-input': {
                                              padding: '10px', // Adjust padding if needed
                                            },
                                          }}
                                    />
                                </Grid>

                                    {/* Buttons in Same Row */}
                                    <Grid item xs={12} sm={2} md={4} display="flex" justifyContent="space-between">
                                    <Button
                                        variant="contained"
                                        onClick={handleSearch}
                                        sx={{
                                        width: '48%',
                                        backgroundColor: '#F97316',
                                        '&:hover': {
                                            backgroundColor: '#ea580c',
                                        },
                                        borderRadius: '5px',
                                        }}
                                        aria-label="Search events"
                                    >
                                        🔍
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={handleClearSearch}
                                        sx={{
                                        width: '48%',
                                        color: '#fff',
                                        borderColor: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#e0e0e0',
                                            color: '#000',
                                        },
                                        borderRadius: '5px',
                                        }}
                                        aria-label="Clear search"
                                    >
                                        Clear
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>


                        {/* Display no results message if no events match */}
                        {noResults && (
                            <Box sx={{ mb: 4 }}>
                                <Alert severity="info">No events match your search criteria.</Alert>
                            </Box>
                        )}

                        <Grid container spacing={4} sx={{ mt: 2 }}>
                            {filteredEvents.map((event) => (
                                <Grid item xs={12} sm={6} md={4} key={event._id}>
                                    <Card 
                                        sx={{ 
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                            },
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box 
                                            sx={{ 
                                                position: 'relative',
                                                paddingTop: '56.25%',
                                                cursor: 'pointer',
                                                overflow: 'hidden',
                                                backgroundColor: '#ffffff'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'grid',
                                                    gap: '4px',
                                                    padding: '4px',
                                                    gridTemplateColumns: event.images.length === 1 
                                                        ? '1fr' 
                                                        : event.images.length === 2 
                                                        ? '2fr 1fr' 
                                                        : event.images.length === 3 
                                                        ? '2fr 1fr' 
                                                        : '2fr 1fr',
                                                    gridTemplateRows: event.images.length <= 2 
                                                        ? '1fr' 
                                                        : event.images.length === 3 
                                                        ? '1fr 1fr' 
                                                        : '1fr 1fr',
                                                    gridAutoFlow: 'dense'
                                                }}
                                                onClick={() => handleImageClick(event.images, 0)}
                                            >
                                                {/* Main large image */}
                                                <Box
                                                    sx={{
                                                        position: 'relative',
                                                        gridColumn: '1 / 2',
                                                        gridRow: '1 / 3',
                                                        overflow: 'hidden',
                                                        borderRadius: '4px',
                                                        '&:hover img': {
                                                            transform: 'scale(1.05)'
                                                        }
                                                    }}
                                                >
                                                    <img
                                                        src={event.images[0]}
                                                        alt={`Event main`}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            transition: 'transform 0.3s ease-in-out'
                                                        }}
                                                    />
                                                </Box>

                                                {/* Side images */}
                                                {event.images.slice(1, 3).map((image, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            position: 'relative',
                                                            gridColumn: '2 / 3',
                                                            gridRow: index === 0 ? '1 / 2' : '2 / 3',
                                                            overflow: 'hidden',
                                                            borderRadius: '4px',
                                                            '&:hover img': {
                                                                transform: 'scale(1.05)'
                                                            }
                                                        }}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`Event ${index + 2}`}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                transition: 'transform 0.3s ease-in-out'
                                                            }}
                                                        />
                                                        {index === 1 && event.images.length > 3 && (
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    bottom: 0,
                                                                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                                                                    color: 'white',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: '1.25rem',
                                                                    fontWeight: 'bold',
                                                                    cursor: 'pointer',
                                                                    '&:hover': {
                                                                        bgcolor: 'rgba(0, 0, 0, 0.6)'
                                                                    }
                                                                }}
                                                            >
                                                                +{event.images.length - 3}
                                                            </Box>
                                                        )}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>

                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Typography 
                                                variant="h5" 
                                                component="h2" 
                                                gutterBottom 
                                                sx={{ 
                                                    fontWeight: 'bold',
                                                    mb: 1,
                                                    color: 'text.primary'
                                                }}
                                            >
                                                {event.schoolName}
                                            </Typography>

                                            <Typography 
                                                variant="subtitle1" 
                                                sx={{ 
                                                    mb: 2,
                                                    color: '#0277bd', // Blue color for organization
                                                    fontWeight: 500,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1
                                                }}
                                            >
                                                <Group sx={{ fontSize: 20 }} />
                                                Hosted by: {event.organizationName}
                                            </Typography>

                                            <Divider sx={{ my: 2 }} />

                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Event sx={{ color: 'primary.main' }} />
                                                    <Typography variant="body2">
                                                        {format(new Date(event.seminarDate), 'MMMM dd, yyyy')}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <LocationOn sx={{ color: 'primary.main' }} />
                                                    <Typography variant="body2">
                                                        {event.location}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <School sx={{ color: 'primary.main' }} />
                                                    <Typography variant="body2">
                                                        Grade {event.grade}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Divider sx={{ my: 2 }} />

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Rating value={calculateAverageRating(event.reviews)} precision={0.5} readOnly size="small" />
                                                    <Typography variant="body2" color="text.secondary">
                                                        ({event.reviews?.length || 0})
                                                    </Typography>
                                                </Box>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    startIcon={<CommentIcon />}
                                                    onClick={() => handleAddReview(event)}
                                                >
                                                    Add Review
                                                </Button>
                                            </Box>

                                            {event.reviews && event.reviews.length > 0 && (
                                                <Box sx={{ mt: 2 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                                        <Typography variant="subtitle2" color="text.secondary">
                                                            Recent Reviews
                                                        </Typography>
                                                        <Button
                                                            size="small"
                                                            onClick={() => handleViewAllReviews(event)}
                                                            sx={{ textTransform: 'none' }}
                                                        >
                                                            View All
                                                        </Button>
                                                    </Box>
                                                    <ReviewList reviews={event.reviews.slice(0, 2)} />
                                                </Box>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}

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

                {/* Image Gallery */}
                <ImageGallery
                    images={selectedEventImages}
                    open={galleryOpen}
                    onClose={() => setGalleryOpen(false)}
                    initialImageIndex={initialImageIndex}
                />

                {/* All Reviews Dialog */}
                <Dialog
                    open={allReviewsDialog}
                    onClose={() => setAllReviewsDialog(false)}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6">
                                All Reviews for {selectedEvent?.schoolName}
                            </Typography>
                            <IconButton onClick={() => setAllReviewsDialog(false)}>
                                <CloseIcon />
                    </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Rating
                                    value={calculateAverageRating(selectedEvent?.reviews)}
                                    readOnly
                                    precision={0.5}
                                    size="large"
                                />
                                <Typography variant="h6" sx={{ ml: 2 }}>
                                    {calculateAverageRating(selectedEvent?.reviews).toFixed(1)} ({selectedEvent?.reviews?.length || 0} reviews)
                                </Typography>
                            </Box>
                            <ReviewList reviews={selectedEvent?.reviews} />
                    </Box>
                    </DialogContent>
                </Dialog>
            </Container>
            <Footer />
        </div>
    );
};

export default PastEventsPage;