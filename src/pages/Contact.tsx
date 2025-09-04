import { useState, type FormEvent, type ChangeEvent } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder submit; integrate backend or email service later
    alert("Message envoyé ! Merci pour votre contact.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      <section className="relative w-full h-[320px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/header.jpg')" }}>
        <div className="absolute inset-0" style={{ background: "rgba(12, 11, 11, 0.38)" }}></div>
        <div className="relative z-10 h-full flex items-center px-6">
          <h1 className="text-white text-4xl font-semibold">Contact</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Écrivez-nous</h2>
            <p className="text-gray-600 mb-6">
              Une question sur nos accompagnements ? Remplissez le formulaire et nous vous répondrons rapidement.
            </p>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1" htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Votre message..."
                  required
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue px-5 py-2 text-white hover:opacity-90">
                Envoyer
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Nos coordonnées</h3>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-medium">Email:</span> contact@votreentreprise.fr</li>
              <li><span className="font-medium">Téléphone:</span> 01 23 45 67 89</li>
              <li><span className="font-medium">Adresse:</span> 10 rue de l'Orientation, 75000 Paris</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


