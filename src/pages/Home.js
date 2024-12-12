import React from "react";
import image from "../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDesktop, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="bg-gradient-to-b from-black to-[#080630] min-h-screen text-white h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center h-full">
        {/* Section de gauche */}
      <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-gray-400 text-sm">Hi, I am</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-2">
                web developper
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-orange-500 mt-4">
                Back/Front/DevOps
              </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
      {/* Back-end */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md   hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-pink-700">
        <FontAwesomeIcon icon={faServer} className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Back-end</h3>
        <p className="mt-2 text-sm text-gray-300">
        Management of APIs, databases, and business logic
        </p>
      </div>

      {/* Front-end */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md   hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-pink-700">
        <FontAwesomeIcon icon={faDesktop} className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Front-end</h3>
        <p className="mt-2 text-sm text-gray-300">
        Development of user interfaces and integration.
        </p>
      </div>

      {/* Ops */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md   hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-green-700">
        <FontAwesomeIcon icon={faCogs} className="text-green-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Ops</h3>
        <p className="mt-2 text-sm text-gray-300">
        Automation, CI/CD, and server management.
        </p>
      </div>
    </div>
          {/* Boutons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            Hire Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1ZS62JVRG4reOGPcXY5jXomilt_4wzqaK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Download CV
          </a>
          </div>


          {/* Informations supplémentaires */}
          <div className="flex space-x-8 mt-12">
            <div>
              <h3 className="text-4xl font-bold text-white">3</h3>
              <p className="text-gray-400">Years</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">3+</h3>
              <p className="text-gray-400">Project done</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Section de droite */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Réduction de l'effet lumineux et agrandissement de l'image */}
            <div className="absolute inset-0 bg-gray-800 rounded-full blur-xl opacity-30 w-72 h-72 lg:w-[500px] lg:h-[500px] mx-auto"></div>
            <img
              src={image}
              alt="Designer"
              className="relative rounded-lg shadow-lg w-72 h-72 lg:w-[500px] lg:h-[500px] mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
