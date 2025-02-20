import Navbar from "../../components/organization/OrgHeader";
import Footer from "../../components/Footer";
import OrganizationInfo from "../../components/organization/OrganizationInfo";
import UpcomingOrganization from "../../components/organization/UpcomingOrganization";
import CompleteSessions from "../../components/organization/CompleteSessions";
import VolunteerRequest from "../../components/organization/VolunteerRequest";
import RequestedSessions from "../../components/organization/RequestedSessions";
// import ReviewsList from "../../components/organization/ReviewsList";

const OrgDashboard = () => {

  const requestedSessions = [
    {
      date: "27.11.2024",
      school: "High School, Matara",
    },
    {
      date: "20.12.2024",
      school: "High School, Galle",
    },
  ];

  return (
    <div className="min-h-screen bg-custom-page">
      <Navbar />

      <div className="container grid grid-cols-1 gap-6 p-6 py-20 mx-auto md:grid-cols-3">
        <OrganizationInfo />

        <div className="space-y-6">
          {/* <SessionsList title="Scheduled Sessions" sessions={scheduledSessions} /> */}
          <UpcomingOrganization />
          <CompleteSessions />
        </div>

        <div className="space-y-6">
          <VolunteerRequest/>
          <RequestedSessions sessions={requestedSessions} />
          {/* <ReviewsList /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrgDashboard;