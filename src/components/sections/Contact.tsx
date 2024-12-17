import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Parlons de votre projet !</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <span>06 12 34 56 78</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <span>contact@certifrance.fr</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span>Basé à Grenoble, interventions possibles partout en France</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-blue-600 mr-3" />
                <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Prénom"
                className="p-2 border rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full p-2 border rounded-md"
            />
            <select className="w-full p-2 border rounded-md">
              <option value="">Type de projet</option>
              <option value="isolation">Isolation</option>
              <option value="chauffage">Chauffage</option>
              <option value="eclairage">Éclairage</option>
              <option value="autre">Autre</option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;