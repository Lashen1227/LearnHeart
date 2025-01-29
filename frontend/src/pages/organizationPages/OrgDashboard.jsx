import Footer from "../../components/Footer";
import OrgHeader from "../../components/header/OrgHeader";

function OrgDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-page">
      <OrgHeader />
      <div className="container flex-1 py-20 mx-auto max-w-7xl">
        <h1>Organization Dashboard</h1>
      </div>
      <Footer />
    </div>
  );
}

export default OrgDashboard;
