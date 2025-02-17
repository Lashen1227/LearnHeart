import { Paper, Box, Typography } from "@mui/material";
import { Building } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

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

  console.log("Fetched School Profiles:", schoolProfiles);

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
        <Box
          sx={{
            width: 96,
            height: 150,
            bgcolor: "primary.main",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Building style={{ width: 48, height: 48, color: "white" }} />
        </Box>
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
