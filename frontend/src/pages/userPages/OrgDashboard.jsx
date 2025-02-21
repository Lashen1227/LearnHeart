import Navbar from "../../components/organization/OrgHeader";
import Footer from "../../components/Footer";
import OrganizationInfo from "../../components/organization/OrganizationInfo";
import UpcomingOrganization from "../../components/organization/UpcomingOrganization";
import CompleteSessions from "../../components/organization/CompleteSessions";
import VolunteerRequest from "../../components/organization/VolunteerRequest";
import SeminarRequests from "../../components/organization/SeminarRequests";

const OrgDashboard = () => {

  return (
    <div className="min-h-screen bg-custom-page">
      <Navbar />

      <div className="container grid grid-cols-1 gap-6 p-6 py-20 mx-auto md:grid-cols-3">
        <OrganizationInfo />

        <div className="space-y-6">
          <UpcomingOrganization />
          <CompleteSessions />
        </div>

        <div className="space-y-6">
          <VolunteerRequest/>
          <SeminarRequests/>
          {/* <ReviewsList /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrgDashboard;