import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import backgroundImage from '../assets/pexels-suzyhazelwood-1629236.jpg';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_6ml369u", // Remplacez par votre Service ID
        "template_2cx9jga", // Remplacez par votre Template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "qNXQNIPE4xtinRYET" // Remplacez par votre Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          reset(); // Réinitialise le formulaire après envoi
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi, réessayez plus tard !");
        }
      );
  };

  return (
    <div
  className="relative min-h-full bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
   >
      {/* Overlay sombre pour contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
  
      {/* Conteneur Formulaire */}
      <div className="relative z-10 max-w-md mx-auto overflow-hidden bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-orange-800 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">Contactez-moi</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Nom</label>
            <input
              type="text"
              {...register("name", {
                required: "Le nom est requis.",
                minLength: {
                  value: 3,
                  message: "Le nom doit contenir au moins 3 caractères.",
                },
                maxLength: {
                  value: 50,
                  message: "Le nom ne doit pas dépasser 50 caractères.",
                },
              })}
              className={`mt-1 block w-full rounded-md shadow-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200 p-2`}
              placeholder="Entrez votre nom"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
  
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "L'email est requis.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Veuillez entrer une adresse email valide.",
                },
              })}
              className={`mt-1 block w-full rounded-md shadow-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200 p-2`}
              placeholder="Entrez votre email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
  
          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-gray-300">Message</label>
            <textarea
              rows="5"
              {...register("message", {
                required: "Le message est requis.",
                minLength: {
                  value: 8,
                  message: "Le message doit contenir au moins 10 caractères.",
                },
              })}
              className={`h-20 mt-1 block w-full rounded-md shadow-md border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition duration-200 p-2`}
              placeholder="Votre message..."
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>
  
          {/* Bouton Soumettre */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Contact;


