import { Paper, Typography, Box, Rating } from '@mui/material';
import { Star } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      id: "1",
      author: "Student",
      content: "Great session! The teacher explained everything clearly.",
      rating: 5,
    },
  ];

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Reviews</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {reviews.map((review) => (
          <Paper key={review.id} variant="outlined" sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="subtitle1">{review.author}</Typography>
              <Rating
                value={review.rating}
                readOnly
                icon={<Star style={{ color: '#facc15' }} />}
                emptyIcon={<Star style={{ color: '#d1d5db' }} />}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">{review.content}</Typography>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
};