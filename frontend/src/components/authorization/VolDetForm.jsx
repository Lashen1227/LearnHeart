import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import registerImg from "../../assets/images/home-img/register.png";
import Spinner from '../Spinner';

function VolDetForm() {
  const Navigate = useNavigate();
  const { user } = useUser();
  const Name = user?.firstName;
  const UserID = user?.id;
  const Status = "pending";
  const VolunteerProfileImageAvailable = user?.hasImage;
  let VolunteerProfileColor = "null";

  if (!VolunteerProfileImageAvailable) {
    const colors = [
      "#d3d3d3", "#a9a9a9", "#708090", "#ccccff", "#aaccaa", "#e6e6fa", "#ffe0cc", "#f0e68c",
      "#c2c2f0", "#d9d9f3", "#e0e0e0", "#b3b3cc", "#d6abab", "#c9c9b9", "#e2cac4", "#d2b48c",
      "#c7a5a5", "#999999", "#b3ccff"
    ];
    const RandomColour = Math.floor(Math.random() * colors.length);
    const randColour = colors[RandomColour];
    VolunteerProfileColor = randColour.replace(/\s+/g, '');
  }

  const [Description, setDescription] = useState("");
  const [VolunteerId, setVolunteerId] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const showShadow = windowWidth >= 640;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let handleSelectedOrgChange = (e) => {
    setSelectedOrg(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/organizations/');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  if (isLoading) {
    return <div><Spinner /> </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const organizations = data.map(item => ({ _id: item._id, name: item.name }));

  function submitForm() {
    console.log("submit");
    Navigate("/volunteer/overview");
    axios.post("http://localhost:3001/api/volunteers/", {
      "userID": UserID,
      "name": Name,
      "description": Description,
      "volunteerId": VolunteerId,
      "status": Status,
      "address": Address,
      "phoneNumber": PhoneNumber,
      "volunteerProfileImageAvailable": VolunteerProfileImageAvailable,
      "volunteerProfileColor": VolunteerProfileColor,
      "orgID": selectedOrg,
    });
  }

  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-custom-page">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 xl:w-1/3">
        <img
          src={registerImg}
          alt="Register"
          className="object-contain w-full max-h-[500px]"
        />
      </div>
      <form className={`w-full sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto sm:h-auto md:h-auto lg:h-auto rounded-lg ${showShadow ? "shadow-lg" : ""} flex flex-col justify-center items-center relative bg-custom-green`}>
        <div className="flex flex-col justify-center items-center w-full px-4 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <h1 className="my-4 text-xl font-bold text-center font-roboto">
            Sign Up as a Volunteer
          </h1>

          <input
            className="w-full sm:w-[80%] mb-4 bg-white text-gray-600 text-sm px-4 py-2 border-b rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
            placeholder="Volunteer ID"
            type="text"
            value={VolunteerId}
            onChange={(e) => setVolunteerId(e.target.value)}
          />
          <input
            className="w-full sm:w-[80%] mb-4 bg-white text-gray-600 text-sm px-4 py-2 border-b rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
            type="text"
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-full sm:w-[80%] mb-4 bg-white text-gray-600 text-sm px-4 py-2 border-b rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="w-full sm:w-[80%] mb-4 bg-white text-gray-600 text-sm px-4 py-2 border-b rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
            type="text"
            placeholder="Phone Number"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <select onChange={handleSelectedOrgChange} className="w-full sm:w-[80%] border-selectBorder border bg-selectFill mb-4 text-gray-600 text-sm px-4 py-2 rounded-lg">
            <option value="null"> -- Select an Organization -- </option>
            {organizations.map((selectedOrg) => <option key={selectedOrg._id} value={selectedOrg._id}>{selectedOrg.name}</option>)}
          </select>

          <button
            onClick={submitForm}
            className="w-full sm:w-[80%] mt-3 bg-custom-orange hover:bg-orange-600 text-white py-2 px-3 rounded-lg font-saira text-m text-center focus:ring-2 focus:ring-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default VolDetForm;