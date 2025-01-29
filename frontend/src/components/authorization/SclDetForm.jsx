import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import registerImg from "../../assets/images/home-img/register.png";

function SclDetForm() {
  const Navigate = useNavigate();
  const { user } = useUser();

  const UserID = user?.id;
  const Name = user?.fullName;
  const [Description, setDescription] = useState("");
  const [Address, setAddress] = useState("");
  const [phnNbr, setPhnNbr] = useState("");
  const [WebSite, setWebSite] = useState("");
  const ProfImageAvailable = user?.hasImage;
  let ProfileColour = "null";

  if (!ProfImageAvailable) {
    const colors = [
      "#d3d3d3", "#a9a9a9", "#708090", "#ccccff", "#aaccaa",
      "#e6e6fa", "#ffe0cc", "#f0e68c", "#c2c2f0", "#d9d9f3",
      "#e0e0e0", "#b3b3cc", "#d6abab", "#c9c9b9", "#e2cac4",
      "#d2b48c", "#c7a5a5", "#999999", "#b3ccff",
    ];
    ProfileColour = colors[Math.floor(Math.random() * colors.length)];
  }


  async function submitForm(e) {
    e.preventDefault();

    if (!Description || !Address || !phnNbr || !WebSite) {
      alert("All fields are required.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/schools/", {
        userID: UserID,
        name: Name,
        description: Description,
        address: Address,
        phoneNumber: phnNbr,
        website: WebSite,
        profileColor: ProfileColour,
        profileImageAvailable: ProfImageAvailable,
      });
      alert("Form submitted successfully!");
      Navigate("/school/overview");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className="flex flex-col-reverse items-center justify-center min-h-screen px-4 lg:flex-row bg-custom-page lg:px-16">
      {/* Image Section */}
      <div className="w-full lg:w-2/5">
        <img
          src={registerImg}
          alt="Register"
          className="object-contain w-full h-auto max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* Form Section */}
      <form
        onSubmit={submitForm}
        className="flex flex-col w-full max-w-lg p-6 space-y-6 border border-gray-300 shadow-lg lg:w-1/3 bg-custom-green rounded-xl lg:p-8"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Sign Up as <span className="text-custom-black">{Name}</span>
        </h1>
        <input
          type="text"
          placeholder="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 text-base text-gray-600 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-3 text-base text-gray-600 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phnNbr}
          onChange={(e) => setPhnNbr(e.target.value)}
          className="w-full px-4 py-3 text-base text-gray-600 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Website"
          value={WebSite}
          onChange={(e) => setWebSite(e.target.value)}
          className="w-full px-4 py-3 text-base text-gray-600 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 text-base font-semibold text-white transition duration-300 rounded-lg bg-custom-orange hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SclDetForm;