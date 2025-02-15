import { UserButton, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function VolProfilebar() {
    const [volunteers, setVolunteers] = useState([]);
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

    return (
        <div className="relative flex flex-col items-center p-6 text-white rounded-lg bg-custom-blue">
            <div className="flex items-center justify-center pointer-events-none">
                <UserButton 
                    appearance={{ 
                        elements: { 
                            userButtonAvatarBox: "w-32 h-32",
                            userButtonAvatarImage: "w-full h-full object-cover"
                        } 
                    }} 
                />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{clarkId?.name}</h2>
            <p className="mt-2 text-sm text-center">
                {clarkId?.email} <br />
                {clarkId?.description}
            </p>
            
            {/* Buttons moved to the bottom */}
            <div className="absolute w-full space-y-3 bottom-6">
                <button className="block w-1/2 py-2 mx-auto duration-300 bg-white border rounded-xl hover:scale-110 hover:bg-blue-50 text-custom-blue">
                    Verify Skills
                </button>
                <button className="block w-1/2 py-2 mx-auto text-white duration-300 border rounded-xl hover:scale-110 bg-custom-orange hover:bg-orange-600">
                    <Link to="/"> Back to Home </Link>
                </button>
            </div>
        </div>
    );
}

export default VolProfilebar;