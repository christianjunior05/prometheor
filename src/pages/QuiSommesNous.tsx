import { FaGraduationCap } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function () {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section - Transformé en Tailwind CSS */}
      <section
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero1.jpg')" }}
      >
        {/* Overlay - rgba(12, 11, 11, 0.38) */}
        <div className="absolute inset-0" style={{ background: "rgba(12, 11, 11, 0.38)" }}></div>
        
        {/* Hero Content */}
        <div className="absolute flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px] h-[247px]">
          {/* Hero Badge - Label qualité OPRA */}
          <div className="w-[1184px] h-[50px] text-white font-['DM_Serif_Display'] font-normal text-[40px] leading-[52px] order-0 flex-none">
            Qui sommes nous ?
          </div>

          {/* Hero Description */}
          <div className="w-[1184px] h-[90px] text-white font-['DM_Serif_Display'] font-normal text-[20px] leading-[30px] order-2 self-stretch flex-none mt-2">
          Chez Prometheor, nous croyons que chacun mérite d’être accompagné avec exigence et bienveillance pour révéler son potentiel. <br />
          Notre mission : préparer les jeunes aux grands défis scolaires et aux exigences du monde professionnel, grâce à un accompagnement sur mesure, animé par des experts passionnés.
          </div>
        </div>
      </section>

      {/* Section 1: Donner à chaque jeune les moyens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/eb5c5d44a1164ca3f39990b7a055b717305d82f8.jpg"
                alt="Jeunes construisant leur avenir"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Donner à chaque jeune les moyens de construire son avenir avec confiance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée par Sonia Dridi, Prometheor est née d'une ambition simple mais essentielle : 
                permettre à chaque jeune de trouver sa voie en toute sérénité.
              </p>
              <p className="text-gray-600">
                Notre mission est de transformer l'orientation scolaire en un moment d'opportunité 
                plutôt qu'une source d'inquiétude, en offrant un accompagnement personnalisé et expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Une équipe de conseillers engagée */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une équipe de conseillers engagée, partout en France
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre réseau de conseillères en orientation couvre l'ensemble du territoire français, 
                garantissant un accompagnement de proximité pour chaque famille.
              </p>
              <p className="text-gray-600">
                Chaque conseillère partage notre vision d'une orientation bienveillante et personnalisée, 
                adaptée aux besoins spécifiques de chaque jeune.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/45c4858ae07bf0aab2c507ef6cc8ec257a259ef3.jpg"
                alt="Équipe de conseillers"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Une vision complète de l'accompagnement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/6f68e071cea952a95001bca9545ebdce79eb537d.jpg"
                alt="Vision complète de l'accompagnement"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une vision complète de l'accompagnement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous avons développé une méthodologie structurée autour de nos "3 P" :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Profil</h3>
                    <p className="text-gray-600">Analyse approfondie des aptitudes et de la personnalité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Projet</h3>
                    <p className="text-gray-600">Définition d'objectifs personnalisés et réalistes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Parcours</h3>
                    <p className="text-gray-600">Construction d'un cheminement adapté et progressif</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Une bonne orientation, c'est celle qui prend en compte l'ensemble de ces dimensions 
                pour proposer des solutions cohérentes et épanouissantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mais c'est aussi tenir compte du vécu scolaire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Mais c'est aussi tenir compte du vécu scolaire du jeune...
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chaque parcours scolaire est unique et mérite d'être valorisé. 
                Nous prenons en compte l'ensemble de l'expérience de l'élève pour 
                construire un projet d'orientation authentique et motivant.
              </p>
              <p className="text-gray-600">
                Notre approche personnalisée s'adapte aux spécificités de chaque jeune, 
                en considérant ses réussites, ses difficultés et ses aspirations pour 
                proposer des solutions sur mesure.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/85b777e62dcfdbbb49faf0a2366fce480e7ab670.jpg"
                alt="Vécu scolaire du jeune"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}