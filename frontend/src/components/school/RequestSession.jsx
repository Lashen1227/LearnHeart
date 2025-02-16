import { Paper, Typography, TextField, Button, Box } from '@mui/material';

export const RequestSession = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Session request submitted');
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Request Session</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Subject"
            placeholder="Enter subject"
            fullWidth
            variant="outlined"
            size="small"
          />
          <TextField
            label="Grade"
            placeholder="Enter grade"
            fullWidth
            variant="outlined"
            size="small"
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Location"
            placeholder="Enter Location"
            fullWidth
            variant="outlined"
            size="small"
            
          />
          <Button 
            type="submit"
            variant="contained" 
            color="primary"
            fullWidth
          >
            Send Request
          </Button>
        </Box>
      </form>
    </Paper>
  );
};