import React from 'react';
import {faGears,faMobileScreenButton,faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section d'introduction */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-500 mb-4">À propos de moi</h1>
          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            Bonjour ! Je suis [Votre Nom], un développeur passionné par l'innovation, le design, et la création de solutions numériques. Voici un aperçu de mon parcours, mes compétences, et mes projets.
          </p>
        </section>

        {/* Section Compétences */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6 text-center">Mes Compétences</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">






            {/* Carte Front-End */}
      <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3),0_-4px_8px_rgba(0,0,0,0.1)]">
                  {/* Section supérieure avec l'icône */}
        <div className="bg-gray-700 p-6 text-center">
            <FontAwesomeIcon icon={faCode} className="text-orange-500 text-5xl mb-4" />
        </div>

          {/* Section inférieure avec le texte */}
          <div className="bg-slate-400 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Développement Front-End</h3>
            <ul className="text-gray-700">
              <li>React.js</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Vue.js</li>
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
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Développement Back-End</h3>
            <ul className="text-gray-700">
              <li>Node.js</li>
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
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6 text-center">Mon Parcours Professionnel</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Je suis diplômé en informatique et ai travaillé sur de nombreux projets passionnants. Mon expérience m'a permis de maîtriser des technologies modernes et de développer une solide compréhension des bonnes pratiques de développement.
            </p>
            <p className="text-lg text-gray-700">
              J'ai également eu l'opportunité de travailler sur des projets de développement mobile, de gestion de bases de données, et de mise en œuvre d'API pour des applications à grande échelle.
            </p>
          </div>
        </section>

        {/* Section Projets */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Projet 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Projet 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Divinologue</h3>
                <p className="text-gray-700">Application mobile de voyance réalisée avec React Native, permettant de consulter des voyants et de recevoir des prédictions personnalisées.</p>
              </div>
            </div>
            {/* Carte Projet 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Projet 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Portfolio Personnel</h3>
                <p className="text-gray-700">Portfolio créé avec React pour présenter mes compétences, mes projets passés et mes objectifs professionnels.</p>
              </div>
            </div>
            {/* Carte Projet 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Projet 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Site E-Commerce</h3>
                <p className="text-gray-700">Site e-commerce développé avec Node.js, Express et MongoDB, permettant une gestion fluide des produits et des paiements en ligne.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contactez-moi</h2>
          <p className="text-lg text-gray-700 mb-4">
            Vous pouvez me contacter par email ou consulter mes profils professionnels en ligne.
          </p>
          <ul className="list-none text-lg text-gray-700">
            <li>Email: [Votre email]</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/votre-profil" className="text-indigo-600 hover:underline">Votre profil LinkedIn</a></li>
            <li>GitHub: <a href="https://github.com/votre-profil" className="text-indigo-600 hover:underline">Votre profil GitHub</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
