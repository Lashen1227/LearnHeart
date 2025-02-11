import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddResource = () => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [subject, setSubject] = useState("");
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("grade", grade);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("subject", subject);

    if (type === "Note" && pdf) {
      formData.append("pdf", pdf);
    } else if (type !== "Note") {
      formData.append("url", url);
    }

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        resetForm();
        setError("");
        //navigate("/volunteer/overview")
      } else {
        setError("Failed to add resource. Please try again.");
      }
    } catch {
      setError("Error adding resource. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setGrade("");
    setType("");
    setDescription("");
    setUrl("");
    setSubject("");
    setPdf(null);
  };

  return (
    <>
      <Navbar />
      <div className="bg-custom-page min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 p-10 bg-custom-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-custom-black">Add New Resource</h1>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-base font-medium text-custom-lightb mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter title of the resource"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
            <div>
              <label htmlFor="grade" className="block text-base font-medium text-custom-lightb mb-1">
                Grade
              </label>
              <input
                type="number"
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
                placeholder="Enter the grade"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-base font-medium text-custom-lightb mb-1">
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="Note">Note</option>
                <option value="Seminar video">Seminar video</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-base font-medium text-custom-lightb mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a brief description of the resource"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
                rows="4"
              ></textarea>
            </div>
            {type === "Note" && (
              <div>
                <label htmlFor="pdf" className="block text-base font-medium text-custom-lightb mb-1">
                  Upload PDF
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    id="pdf"
                    accept=".pdf"
                    onChange={(e) => setPdf(e.target.files ? e.target.files[0] : null)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("pdf").click()}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Choose File
                  </button>
                  <span className="text-base text-custom-lightb">{pdf ? pdf.name : "No file chosen"}</span>
                </div>
              </div>
            )}
            {type !== "Note" && (
              <div>
                <label htmlFor="url" className="block text-base font-medium text-custom-lightb mb-1">
                  Resource URL
                </label>
                <input
                  type="url"
                  id="url"
                  placeholder="Add YouTube video URL or Google Drive link here"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required={type !== "Note"}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
              </div>
            )}
            <div>
              <label htmlFor="subject" className="block text-bas font-medium text-custom-lightb mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Enter the subject"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-custom-light-green hover:bg-custom-green hover:text-custom-black focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-opacity-50"
                }`}
              >
                {loading ? "Adding..." : "Add Resource"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddResource;