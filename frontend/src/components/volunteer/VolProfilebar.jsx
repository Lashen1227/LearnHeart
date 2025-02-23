import { UserButton, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function VolProfilebar() {
    const [volunteers, setVolunteers] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const user = useUser().user;

    const clarkId = volunteers.find((vol) => vol.userID === user?.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/volunteers");
                setVolunteers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/volunteers/accepted-organizations/${user?.id}`);
                setOrganizations(response.data);
            } catch (error) {
                console.error("Error fetching organizations:", error);
            }
        };
    
        if (user?.id) {
            fetchOrganizations();
        }
    }, [user]);

    return (
        <div className="relative flex flex-col items-center p-6 text-white rounded-lg bg-custom-blue w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto shadow-lg min-h-[400px] flex-grow">
            <div className="flex flex-col items-center justify-center flex-grow pointer-events-none">
                <UserButton 
                    appearance={{ 
                        elements: { 
                            userButtonAvatarBox: "w-24 h-24 md:w-32 md:h-32",
                            userButtonAvatarImage: "w-full h-full object-cover"
                        } 
                    }} 
                />
                <h2 className="mt-4 text-3xl font-semibold text-center md:text-xl">{clarkId?.name}</h2>
                <p className="px-4 mt-2 text-sm text-center md:text-base md:px-6">
                    {clarkId?.email} <br />
                    {clarkId?.description}
                </p>
                <div className="mt-10">
                    <h3 className="text-md font-semibold text-center md:text-lg">Joined Organizations</h3>
                    <ul className="list-disc list-inside">
                        {organizations.map((org, index) => (
                            <li key={index}>{org}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="flex flex-col items-center w-full pb-6 mt-4 space-y-3">
                <button className="w-3/4 py-2 duration-300 bg-white border md:w-1/2 rounded-xl hover:scale-105 hover:bg-blue-50 text-custom-blue">
                    Verify Skills
                </button>
                <button className="w-3/4 py-2 text-white duration-300 border md:w-1/2 rounded-xl hover:scale-105 bg-custom-orange hover:bg-orange-600">
                    <Link to="/"> Back to Home </Link>
                </button>
            </div>
        </div>
    );
}

export default VolProfilebar;
