import Lashen from "../assets/images/developers-img/lashen.jpeg";
import Yoshani from "../assets/images/developers-img/yoshani.jpg";
import Rehan from "../assets/images/developers-img/rehan.jpg";
import Amadi from "../assets/images/developers-img/amadi.jpg";
import Malindu from "../assets/images/developers-img/malindu.jpg";
import Thiseni from "../assets/images/developers-img/thiseni.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const data = [
  {
    name: "Lashen Martino",
    desc: "The team was guided to success by Lashen's innovative leadership, which played a pivotal role in the full-stack development of the project.",
    image: Lashen,
    git: "https://github.com/Lashen1227",
    linkdn: "https://www.linkedin.com/in/lashen-martino/",
  },
  {
    name: "Yoshani Gamage",
    desc: "Yoshani's blend of passion and technical expertise shines in full-stack development, highlighting her pivotal role in the project's success.",
    image: Yoshani,
    git: "https://github.com/yrgamage",
    linkdn: "https://www.linkedin.com/in/yoshani-gamage/",
  },
  {
    name: "Rehan Godakumbura",
    desc: "Rehan played a crucial role in the frontend development of LearnHeart, crafting a user-friendly and visually appealing design.",
    image: Rehan,
    git: "https://github.com/rehangodakumbura",
    linkdn: "https://www.linkedin.com/in/rehan-dewkalana-1b9915292/",
  },
  {
    name: "Malasha Amadi",
    desc: "Amadi played a crucial role in shaping LearnHeart's frontend, utilizing her expertise to breathe life into its user-friendly project interface.",
    image: Amadi,
    git: "https://github.com/MalshaAmadi",
    linkdn: "https://www.linkedin.com/in/malsha-amadi-349449299",
  },
  {
    name: "Malindu Kalhara",
    desc: "Malindu made a significant contribution to LearnHeart by leading the frontend development, creating an intuitive user experience.",
    image: Malindu,
    git: "https://github.com/malindu29",
    linkdn: "http://www.linkedin.com/in/malindu-kalhara",
  },
  {
    name: "Thiseni Perera",
    desc: "Thiseni's passion and technical expertise shine through in the backend development, highlighting her crucial role in the project's success.",
    image: Thiseni,
    git: "https://github.com/Thiseni-D",
    linkdn: "https://www.linkedin.com/in/thiseni-perera-486530274",
  },
];

function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

function Team() {
    const rows = chunkArray(data, 3); // Split data into chunks of 3

    return (
      <>
        <Navbar />
        <div id="aboutus" className="flex flex-col items-center justify-center min-h-screen px-10 py-10 text-center text-black bg-custom-page">
          {/* <h1 className="text-5xl font-bold">Meet Our Team</h1> */}
            
          <div className="flex flex-col items-center justify-center mt-5 w-[65%] bg-custom-orange border-2 border-white p-10 rounded-lg">
              <p className="mt-5 font-serif font-thin text-black opacity-100">
                Meet the heart behind LearnHeart! We’re a dedicated team of educators, technologists, 
                and volunteers driven by a shared vision of empowering communities through education. With diverse backgrounds and skills, 
                we work together to create meaningful connections between volunteers and projects that make a lasting impact. 
                United by our passion for learning and community upliftment, 
                we strive to build a platform that transforms lives and bridges educational gaps across Sri Lanka.
              </p>
          </div>
          <div className="flex flex-col space-y-8 mt-8 lg:w-[75%]">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-around">
                        {row.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center transition-transform hover:scale-105">
                                <img src={item.image} alt={item.name} className="w-[190px] h-[190px] bg-custom-page rounded-full border-gray-300 border-4" />

                                <div className="w-[70%] text-center space-y-2 mt-4">
                                  <p className="font-bold">{item.name}</p>
                                    
                                  <p className="text-[12px]">{item.desc}</p>
                                    
                                  <div className="flex items-center justify-center space-x-4">
                                    <a href={item.git} className="text-xl text-gray-600 hover:text-black"><FaGithub /></a>
                                    <a href={item.linkdn} className="text-xl text-gray-600 hover:text-blue-700"><FaLinkedin /></a>
                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
          </div>
          <br/><br/>
          <div className="flex items-center justify-center w-48 h-12 font-bold text-black duration-300 border-2 border-white rounded-lg cursor-pointer bg-custom-orange hover:bg-orange-600 hover:scale-110">
            <Link to="/contact-us"> Contact Us </Link>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Team;
