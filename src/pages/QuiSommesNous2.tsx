import { FaCheck, FaGraduationCap } from "react-icons/fa";
import Navbar from "../components/Navbar";

const QuiSommesNous2 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Transformé en Tailwind CSS */}
      <section
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gros-plan-sur-la-classe-virtuelle 2.png')" }}
      >
        {/* Overlay - rgba(12, 11, 11, 0.38) */}
        <div className="absolute inset-0" style={{ background: "rgba(12, 11, 11, 0.38)" }}></div>
        
        {/* Hero Content */}
        <div className="absolute flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px] h-[247px]">
          {/* Hero Badge - Label qualité OPRA */}
          <div className="w-[1184px] h-[105px] text-white font-['DM_Serif_Display'] font-normal text-[40px] leading-[52px] order-0 flex-none">
            Préparez efficacement vos <span className="text-yellow-400">concours</span> et <span className="text-yellow-400">certifications</span> post bac
          </div>
          
          {/* Hero Title */}
          <div className="w-[838px] h-[28px] text-white font-['DM_Serif_Display'] font-normal text-[25px] leading-[100%] order-1 flex-none mb-4">
            Vous visez une école de commerce ou une école d'ingénieur après le bac ?
          </div>
          
          {/* Hero Description */}
          <div className="w-[1184px] h-[90px] text-white font-['DM_Serif_Display'] font-normal text-[20px] leading-[30px] order-2 self-stretch flex-none mt-2">
            Vous souhaitez valoriser votre niveau en français ou en anglais avec une certification reconnue ?<br/>
            Nous vous proposons des stages de préparation ciblés, adaptés aux exigences des épreuves et aux profils des candidats.
          </div>
        </div>
      </section>

      {/* Section: Concours d'entrée en école de commerce */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/eb5c5d44a1164ca3f39990b7a055b717305d82f8.jpg"
                alt="Étudiants préparant concours commerce"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-400">Concours d'entrée</span> en école de <span className="text-yellow-400">commerce post-bac</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nos stages vous préparent aux épreuves écrites et orales des principaux concours :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    ACCES, SESAME
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Oraux de motivation des Bachelors et BBA (parcours hors concours commun)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                <span className="text-yellow-400 font-semibold">Objectif :</span> s'entraîner sur les épreuves clés (logique, raisonnement, synthèse, anglais) 
                et développer une posture convaincante à l'oral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Concours d'entrée en école d'ingénieur */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-400">Concours d'entrée</span> en école d'<span className="text-yellow-400">ingénieur post-bac</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous accompagnons les élèves souhaitant intégrer une école via les concours suivants :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) ou d'autres écoles sur dossier
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                <span className="text-yellow-400 font-semibold">Objectif :</span> consolider les acquis scientifiques, optimiser la gestion du temps et réussir les entretiens de motivation.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/45c4858ae07bf0aab2c507ef6cc8ec257a259ef3.jpg"
                alt="Étudiants préparant concours ingénieur"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Préparations aux certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/6f68e071cea952a95001bca9545ebdce79eb537d.jpg"
                alt="Étudiants préparant certifications"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-400">Préparations aux certifications</span> en langue et en <span className="text-yellow-400">expression écrite</span> : pour tous les âges
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Pour renforcer son dossier ou répondre aux attendus d'une formation, nous proposons des préparations aux :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Tests d'anglais (TOEIC®, IELTS®, CLOE)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Certificat Voltaire (maîtrise de l'orthographe et de l'expression écrite)
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
                Nos formations combinent :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des sessions en petits groupes, en présentiel ou à distance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Un accompagnement personnalisé
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Et l'accès à une plateforme de cours en ligne, pour s'entraîner et se perfectionner entre les séances (vidéos, exercices interactifs, fiches méthodes...)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Pour découvrir les programmes détaillés et les prochaines dates, accédez à nos stages de préparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Intéressé par nos <span className="text-yellow-400">stages</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Choisissez dès maintenant l'une de nos conseillères pour définir ensemble la formule la plus adaptée.
              </p>
              <p className="text-gray-600">
                Nos formations sont conçues pour répondre aux besoins spécifiques de chaque élève, 
                avec un accompagnement personnalisé et des méthodes éprouvées pour maximiser vos chances de réussite.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/85b777e62dcfdbbb49faf0a2366fce480e7ab670.jpg"
                alt="Étudiants en formation"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous2;

