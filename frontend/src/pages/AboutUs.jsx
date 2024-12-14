import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import pictureOne from "../aboutUs/abtus1.jpg"
import pictureTwo from "../aboutUs/abtus2.png"
import "./about_us.css"

function AboutUs(){
  return(
      <div className="page-container">
          

          <div className="card3">
              <img className="card3-image" src ={pictureTwo} alt ="Vision"></img>
              <div className="card3-content">
                  <h2 className="card3-title">Our Vision</h2>
                  <p className="card3-text">Our vision is to bridge the educational gap by fostering equal learning opportunities for every child,
                     regardless of their geographic location or socioeconomic background. We are dedicated to creating a platform that empowers
                      communities through knowledge sharing, collaboration, and meaningful connections. Together, we 𝘫𝘰𝘪𝘯 𝘩𝘢𝘯𝘥𝘴 𝘵𝘰 𝘪𝘨𝘯𝘪𝘵𝘦 𝘮𝘪𝘯𝘥𝘴
                        to uplift communities and create a more inclusive and equitable world to believe in the transformative power of education.</p>
              </div>
          </div>


          <div className="card4">
          <h1 className="card4-title">Why LearnHeart?</h1>
          <div className="card4-flow">
              <div className="card4-item">
                  <div className="icon-circle">
                      <i className="fas fa-chalkboard"></i>
                  </div>
                  <p>Request School Seminars</p>
              </div>
              <div className="card4-item">
                  <div className="icon-circle">
                      <i className="fas fa-user-friends"></i>
                  </div>
                  <p>Help Students</p>
              </div>
              <div className="card4-item">
                  <div className="icon-circle">
                      <i className="fas fa-network-wired"></i>
                  </div>
                  <p>Connect with Volunteers</p>
              </div>
              <div className="card4-item">
                  <div className="icon-circle">
                      <i className="fas fa-book"></i>
                  </div>
                  <p>Access to Resources</p>
              </div>
          </div>
      </div>
      </div>
  );
}

export default AboutUs