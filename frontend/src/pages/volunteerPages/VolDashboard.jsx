import Footer from "../../components/Footer";
import VolHeader from "../../components/header/VolHeader";

function VolDashboard() {
  return (
    <div className="h-screen bg-custom-page">
      <div className="flex flex-col min-h-screen">
        <VolHeader />
        <div className="container flex-1 py-20 mx-auto max-w-7xl">
          <h1>Volunteer Dashboard</h1>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default VolDashboard