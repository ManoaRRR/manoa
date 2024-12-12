import React from 'react';
import {faGears,faMobileScreenButton,faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import divinologue from "../assets/Capture d’écran 2024-12-12 133306.png"
import sentiment from "../assets/Capture d'écran 2024-12-12 131148.png"
import portfolio from "../assets/OIP.jpg"
function About() {
  return (
    <div className="bg-gradient-to-b from-black to-[#080630] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section d'introduction */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">About me</h1>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Hello! I'm Manoa Aro Ny Avo, a developer with a passion for innovation, design, and creating digital solutions. Here is an overview of my background, my skills, and my projects.
          </p>
        </section>

        {/* Section Compétences */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-400 mb-6 text-center">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Carte Front-End */}
      <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3),0_-4px_8px_rgba(0,0,0,0.1)]">
                  {/* Section supérieure avec l'icône */}
        <div className="bg-gray-700 p-6 text-center">
            <FontAwesomeIcon icon={faCode} className="text-orange-500 text-5xl mb-4" />
        </div>

          {/* Section inférieure avec le texte */}
          <div className="bg-slate-400 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Front-End Development</h3>
            <ul className="text-gray-700">
              <li>React.js</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Next.js</li>
            </ul>
          </div>
      </div>

            {/* Carte Back-End -------------------------------------*/}
          
      <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
                  {/* Section supérieure avec l'icône */}
        <div className="bg-gray-700 p-6 text-center">
            <FontAwesomeIcon icon={faGears} className="text-blue-500 text-5xl mb-4"/>
        </div>

          {/* Section inférieure avec le texte */}
          <div className="bg-slate-400 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Back-End Developpement</h3>
            <ul className="text-gray-700">
              <li>Spring boot</li>
              <li>Express.js</li>
              <li>APIs RESTfull</li>
            </ul>
          </div>
      </div>
            {/* Carte Mobile -------------------------*/}
      <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
                  {/* Section supérieure avec l'icône */}
        <div className="bg-gray-700 p-6 text-center">
            <FontAwesomeIcon icon={faMobileScreenButton} className="text-green-500 text-5xl mb-4" />
        </div>

          {/* Section inférieure avec le texte */}
          <div className="bg-slate-400 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Développement Mobile</h3>
            <ul className="text-gray-700">
              <li>React Native</li>
              <li>Expo</li>
              <li>Android & Ios</li>
            </ul>
          </div>
      </div>
    </div>
        </section>

        {/* Section Parcours Professionnel */}
        <section className="mb-16 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                {/* Titre attractif */}
                <h2 className="text-3xl font-semibold text-gray-500 mb-6 text-center transition duration-300 ease-in-out hover:text-gray-900 hover:tracking-wide">
                  Study path
                </h2>

                {/* Conteneur principal avec effets */}
                <div className="relative bg-slate-400 rounded-lg shadow-lg p-8 group transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-800 hover:via-purple-800 hover:to-pink-800 hover:shadow-2xl hover:-translate-y-2">
                  {/* Effet décoratif de survol */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 opacity-0 group-hover:opacity-30 blur-lg transition duration-300 ease-in-out"></div>

                  {/* Contenu texte */}
                  <p className="text-lg text-gray-700 mb-4 transition duration-300 ease-in-out group-hover:text-white group-hover:font-medium">
                  I obtained my bachelor's degree at the Haute Ecole d'Informatique, I followed the Software Ecosystem course where we learned programming, web development, and the Cloud
                  </p>
                  <p className="text-lg text-gray-700 transition duration-300 ease-in-out group-hover:text-white group-hover:font-medium">
                  and I did a 3-month end-of-study internship for the position of mobile developer at RandevTeam
                  </p>
                </div>
      </section>


        {/* Section Projets */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-500 mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Projet 1 */}
            <div className="bg-gradient-to-b from-black to-[#06147B] rounded-lg shadow-lg  overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img src={divinologue} alt="Projet 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Divinologue</h3>
                <p className="text-slate-400">Mobile psychic application made with React Native, allowing you to consult psychics and receive personalized predictions..</p>
              </div>
            </div>
            {/* Carte Projet 2 */}
            <div className="bg-gradient-to-b from-black to-[#06147B] rounded-lg  shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img src={portfolio} alt="Projet 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Portfolio Personnel</h3>
                <p className="text-slate-400">Portfolio created with React to showcase my skills, past projects, and professional goals.</p>
              </div>
            </div>
            {/* Carte Projet 3 */}
            <div className="bg-gradient-to-b from-black to-[#06147B] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img src={sentiment} alt="Projet 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-400 mb-4">Sentiment detector</h3>
                <p className="text-slate-400">Web application that detects a person's mood and feelings based on their social media posts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-300 mb-6">Contact</h2>
          <p className="text-lg text-gray-300 mb-4">
          You can contact me by email or view my professional profiles online.
          </p>
          <ul className="list-none text-lg text-gray-300">
            <li>Email: hei.manoa.2@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/manoa-rambolamanana-ba55b5252/" className="text-indigo-600 hover:underline">Manoa Rambolamanana</a></li>
            <li>GitHub: <a href="https://github.com/ManoaRRR" className="text-indigo-600 hover:underline">ManoaRRR</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
