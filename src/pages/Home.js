import React from "react";
import image from "../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDesktop, faCogs } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center h-full">
        {/* Section de gauche */}
      <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-gray-400 text-sm">Hi, I am</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-2">
                web developper
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-orange-500 mt-4">
                back/front 
              </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
      {/* Back-end */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md">
        <FontAwesomeIcon icon={faServer} className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Back-end</h3>
        <p className="mt-2 text-sm text-gray-300">
        Management of APIs, databases, and business logic
        </p>
      </div>

      {/* Front-end */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md">
        <FontAwesomeIcon icon={faDesktop} className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Front-end</h3>
        <p className="mt-2 text-sm text-gray-300">
        Development of user interfaces and integration.
        </p>
      </div>

      {/* Ops */}
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg ransform transition-all duration-500 hover:scale-110 shadow-md">
        <FontAwesomeIcon icon={faCogs} className="text-green-500 text-4xl mb-4" />
        <h3 className="text-lg font-semibold">Ops</h3>
        <p className="mt-2 text-sm text-gray-300">
        Automation, CI/CD, and server management.
        </p>
      </div>
    </div>
          {/* Boutons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition">
                  Hire Me
                </button>
                <a
                  href="/cv.pdf"
                  download="RAMBOLAMANANA_Manoa_CV.pdf"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Download CV
                </a>
          </div>


          {/* Informations supplémentaires */}
          <div className="flex space-x-8 mt-12">
            <div>
              <h3 className="text-4xl font-bold text-white">5+</h3>
              <p className="text-gray-400">Experiences</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">20+</h3>
              <p className="text-gray-400">Project done</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">80+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Section de droite */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Réduction de l'effet lumineux et agrandissement de l'image */}
            <div className="absolute inset-0 bg-gray-600 rounded-full blur-xl opacity-30 w-72 h-72 lg:w-[500px] lg:h-[500px] mx-auto"></div>
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
