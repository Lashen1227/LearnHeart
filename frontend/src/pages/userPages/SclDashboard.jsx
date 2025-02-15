import Footer from "../../components/Footer";
import SclHeader from "../../components/school/SclHeader";

function SclDashboard() {
  return (
    <div className="h-screen bg-custom-page">
      <div className="flex flex-col min-h-screen">
        <SclHeader />
        <div className="container flex-1 py-20 mx-auto max-w-7xl">
          <h1>School Dashboard</h1>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SclDashboard