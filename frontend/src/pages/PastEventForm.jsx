import { useState } from "react";

export default function PastEventForm({ onNewEvent }) {
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [seminarDate, setSeminarDate] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("schoolName", schoolName);
    formData.append("location", location);
    formData.append("grade", grade);
    formData.append("subject", subject);
    formData.append("seminarDate", seminarDate);
    formData.append("image", image);

    // Send event data to backend
    const res = await fetch("/api/events", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const createdEvent = await res.json();
      onNewEvent(createdEvent); // Notify parent component to add the new event
      resetForm(); // Reset form after submission
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setSchoolName("");
    setLocation("");
    setGrade("");
    setSubject("");
    setSeminarDate("");
    setImage(null);
    setImageUrl("");
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4">Add a New Past Event</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          placeholder="Seminar Conduct Date"
          value={seminarDate}
          onChange={(e) => setSeminarDate(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        {/* Display selected image preview */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Image Preview"
            className="w-32 h-32 object-cover mt-4 rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
}
