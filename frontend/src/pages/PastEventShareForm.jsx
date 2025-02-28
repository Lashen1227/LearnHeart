import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";

const PastEventShareForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    location: "",
    grade: "",
    subject: "",
    date: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Drag and Drop Image Handling
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
    },
  });

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));
    images.forEach((image) => formDataToSend.append("images", image));

    try {
      const response = await axios.post("http://localhost:3003/api/events/add", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({ schoolName: "", location: "", grade: "", subject: "", date: "" });
        setImages([]);
      }
    } catch (error) {
      console.error("Error submitting event:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
      <motion.div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl">
          <h2 className="mb-6 text-xl font-semibold text-center text-blue-600">Share a Past Event</h2>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 mb-4 text-center text-white bg-green-500 rounded-lg"
            >
              Event shared successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="schoolName" placeholder="School Name" value={formData.schoolName} onChange={handleChange} required className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            <input type="text" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />

            {/* Drag and Drop Upload */}
            <div {...getRootProps()} className="p-6 text-center transition-all border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag & Drop images here, or click to select files</p>
            </div>

            {/* Display selected images */}
            <div className="flex flex-wrap gap-2 mt-2">
              {images.map((file, index) => (
                <div key={index} className="flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-200 rounded">
                  <img src={URL.createObjectURL(file)} alt="upload" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <button type="submit" className="px-6 py-2 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700" disabled={loading}>
                {loading ? "Sharing..." : "Share Event"}
              </button>
              <button type="button" className="px-6 py-2 text-white transition-all bg-gray-500 rounded-lg hover:bg-gray-700" onClick={() => setFormData({ schoolName: "", location: "", grade: "", subject: "", date: "" })}>
                Clear
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default PastEventShareForm;
