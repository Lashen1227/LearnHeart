import { Paper, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export const SchoolProfile = () => {
  const [schoolProfiles, setSchoolProfiles] = useState([]); // Pluralized state name
  const { user: curruntID, isLoaded } = useUser();
  // Get school from Clerk's user object
  const matchingSchool = schoolProfiles.find(
    (sch) => sch.userID === curruntID?.id
  ); // Find the specific school

  useEffect(() => {
    const fetchSchoolProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/schools/");
        setSchoolProfiles(response.data); // Set all schools
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSchoolProfiles();
  }, []);

  if (!isLoaded || schoolProfiles.length === 0) {
    return <p>Loading...</p>;
  }

  if (!matchingSchool) {
    return <p>No matching school profile found.</p>;
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 580,
          textAlign: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center flex-grow pointer-events-none">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-24 h-24 md:w-32 md:h-32",
                userButtonAvatarImage: "w-full h-full object-cover",
              },
            }}
          />
                  <Typography variant="h5" sx={{ mb: 1, color: "primary.dark" }}>
          <strong>{matchingSchool?.schoolName}</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          <strong>{matchingSchool?.description}</strong>
          <br />
          {matchingSchool?.address}
          <br />
          {matchingSchool?.contact}
          <br />
          {matchingSchool?.email}
          <br />
          {matchingSchool?.website}
        </Typography>
        </div>

        <div className="flex items-center space-x-4">
          <SignOutButton>
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white transition-all duration-200 border border-transparent rounded-lg bg-custom-orange hover:bg-orange-600"
            >
              Sign out
            </Link>
          </SignOutButton>
        </div>
      </Box>
    </Paper>
  );
};
