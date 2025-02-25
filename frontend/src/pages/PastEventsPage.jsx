import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "@clerk/clerk-react";

export default function PastEvents() {
  const { user } = useUser();  
  const username = user?.username || user?.fullName || "Unknown User";  
  const userProfilePic = user?.profileImageUrl || "/default-avatar.png";

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-8 pt-24 bg-gray-100">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Past Events</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {events.map((event) => (
            <motion.div key={event._id} className="w-full bg-white shadow-lg rounded-lg p-6" whileHover={{ scale: 1.02 }}>
              
              <div className="grid grid-cols-3 gap-2">
                {event.images.map((img, index) => (
                  <img key={index} src={`http://localhost:3003${img}`} alt="Event" className="rounded-md h-32 w-full object-cover" />
                ))}
              </div>

              <h3 className="mt-4 text-lg font-bold">{event.schoolName} - {event.location}</h3>
              <p className="text-sm text-gray-600">{event.grade} - {event.subject}</p>
              <p className="text-sm text-gray-500">Conducted on: {new Date(event.date).toDateString()}</p>

              {/* Rating System - Show Average Rating and Total Ratings */}
<div className="flex items-center mt-3">
  {[1, 2, 3, 4, 5].map((star) => (
    <FaStar
      key={star}
      onClick={() => handleRating(event._id, star)}
      className={`cursor-pointer text-2xl ${
        event.ratings.length > 0 &&
        Math.round(event.ratings.reduce((a, b) => a + b, 0) / event.ratings.length) >= star
          ? "text-yellow-500"
          : "text-gray-400"
      }`}
    />
  ))}
  <span className="ml-2 text-sm text-gray-600">
    {event.ratings.length > 0 
      ? `${(event.ratings.reduce((a, b) => a + b, 0) / event.ratings.length).toFixed(1)} ⭐ (${event.ratings.length} ratings)` 
      : "No Ratings"}
  </span>
</div>


              {/* Comments */}
              <button onClick={() => { setSelectedEvent(event); setShowComments(true); }} className="mt-3 text-blue-600 underline">
                View All Comments
              </button>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInputs[event._id] || ""}
                  onChange={(e) => handleCommentChange(event._id, e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                <button onClick={() => handleCommentSubmit(event._id)} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
                  Add Comment
                </button>
                {commentSuccess[event._id] && <p className="text-green-600 mt-2">Comment added successfully!</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comments Modal */}
{showComments && selectedEvent && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="p-6 bg-white rounded-lg max-w-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{selectedEvent.schoolName} - Comments</h2>
      <div className="max-h-96 overflow-y-auto space-y-4">
        {selectedEvent.comments.length > 0 ? (
          selectedEvent.comments.map((comment, idx) => (
            <div key={idx} className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
              <img 
                src={comment.profilePic || "/default-avatar.png"}  
                alt="User Avatar" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <p className="font-semibold text-gray-800">{comment.username}</p>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No comments yet.</p>
        )}
      </div>
      <button onClick={() => setShowComments(false)} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full">
        Close
      </button>
    </div>
  </div>
)}


      <Footer />
    </>
  );
}
