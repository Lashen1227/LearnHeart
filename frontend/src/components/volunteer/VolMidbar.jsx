import { useState, useEffect, useRef } from "react";
import axios from "axios";

function VolMidbar() {
  const [formData, setFormData] = useState({
    qualifications: "",
    language: "",
    subjects: "",
    availableDates: [],
    organization: "",
    cv: null,
  });

  const [organizations, setOrganizations] = useState([]);
  const [alertMessage, setAlertMessage] = useState(""); // Success or Error message
  const [alertType, setAlertType] = useState(""); // "success" or "error"
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/organizations")
      .then(response => setOrganizations(response.data))
      .catch(error => console.error("Error fetching organizations:", error));
  }, []);

  const availableDatesOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      availableDates: checked
        ? [...prev.availableDates, value]
        : prev.availableDates.filter((date) => date !== value),
    }));
  };

  const handleClear = () => {
    setFormData({
      qualifications: "",
      language: "",
      subjects: "",
      availableDates: [],
      organization: "",
      cv: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("qualifications", formData.qualifications);
    formDataToSend.append("language", formData.language);
    formDataToSend.append("subjects", formData.subjects);
    formDataToSend.append("organization", formData.organization);
    formDataToSend.append("availableDates", JSON.stringify(formData.availableDates));
  
    if (formData.cv) {
      formDataToSend.append("cv", formData.cv);
    }

    try {
      const response = await axios.post("http://localhost:3001/api/volunteers/request", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form Submitted:", response.data);

      // Show success message
      setAlertMessage("Request submitted successfully!");
      setAlertType("success");
      
      // Clear form after showing the success message
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
        setFormData({
          qualifications: "",
          language: "",
          subjects: "",
          availableDates: [],
          organization: "",
          cv: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("Error submitting request. Please try again.");
      setAlertType("error");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="p-6 rounded-lg text-center bg-custom-green shadow-md">
        <h2 className="text-xl font-semibold">Join with Organizations</h2>
        <p className="mt-2 text-gray-600">Select an organization to submit your request.</p>

        {/* Success or Error Alert */}
        {alertMessage && (
          <div className={`mt-4 p-4 rounded ${alertType === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-left mb-2">Preferred Organization</label>
            <select name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border rounded">
              {organizations.map((org) => (
                <option key={org._id} value={org._id}>{org.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Education / Work Qualifications</label>
            <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Language Proficiency</label>
            <input type="text" name="language" value={formData.language} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Teaching Subjects</label>
            <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Available Dates</label>
            <div className="flex flex-wrap gap-2">
              {availableDatesOptions.map((date) => (
                <label key={date} className="flex items-center">
                  <input type="checkbox" value={date} checked={formData.availableDates.includes(date)} onChange={handleCheckboxChange} className="mr-2" />
                  {date}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2">Upload CV</label>
            <input type="file" name="cv" onChange={handleChange} accept=".pdf,.doc,.docx" required ref={fileInputRef} className="w-full p-2 border rounded" />
          </div>

          <div className="flex gap-2 mt-4">
            <button type="button" onClick={handleClear} className="w-full p-2 bg-custom-blue rounded text-custom-white">Clear</button>
            <button type="submit" className="w-full p-2 bg-custom-orange text-custom-white rounded">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
}    

export default VolMidbar;