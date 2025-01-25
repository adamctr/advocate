"use client"

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="min-w-[320px]items-center justify-center p-2">
      <div className="max-w-lg flex-1 w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-accent mb-6 ">Contactez-nous</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 text-accent block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 text-accent  block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 text-accent  block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre message"
              required
            />

          <p className='text-xs my-4 text-accent'>En validant, vous acceptez la politique de confidentialité.</p>

          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
