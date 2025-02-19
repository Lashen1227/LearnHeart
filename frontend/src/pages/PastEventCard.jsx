import { useState } from "react";

export default function PastEventCard({ event }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(event.reviews || []);

  const handleRatingChange = (e) => setRating(e.target.value);
  const handleReviewChange = (e) => setReview(e.target.value);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Add new review
    const newReview = { rating, review };
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Optionally save this review to the backend
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{event.schoolName}</h3>
      <p>{event.location} - {event.grade}</p>
      <p>{event.subject}</p>
      <p>Date: {event.seminarDate}</p>

      {event.image && <img src={event.image} alt="Seminar" className="w-full h-64 object-cover mt-4" />}

      <div className="mt-4">
        <h4 className="font-semibold">Add Rating and Review</h4>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className="w-full p-2 border rounded"
            placeholder="Rate 1-5"
            required
          />
          <textarea
            value={review}
            onChange={handleReviewChange}
            className="w-full p-2 border rounded"
            placeholder="Write your review here"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Review
          </button>
        </form>

        {/* Display reviews */}
        {reviews.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold">Reviews</h4>
            {reviews.map((review, idx) => (
              <div key={idx} className="border-b py-2">
                <p><strong>Rating:</strong> {review.rating}</p>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
