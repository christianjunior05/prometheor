import { FaCheck, FaGraduationCap } from "react-icons/fa";


const Homepage = () => {
  return (
    <div className="min-h-screen">
   
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
          <div className="w-[1184px] h-[105px] text-white font-['DM_Serif_Display'] font-normal text-[40px] leading-[52px] order-0 flex-none">
            Au travers de notre Label qualité OPRA – Orientation Personnalisé, Responsable & Accompagnée,
          </div>
          
          {/* Hero Title */}
          <div className="w-[838px] h-[28px] text-white font-['DM_Serif_Display'] font-normal text-[25px] leading-[100%] order-1 flex-none mb-4">
            Nous nous engageons à vos côtés pour Une Orientation Scolaire d'Excellence
          </div>
          
          {/* Hero Description */}
          <div className="w-[1184px] h-[90px] text-white font-['DM_Serif_Display'] font-normal text-[20px] leading-[30px] order-2 self-stretch flex-none mt-2">
            Chez Prometheor, nous accompagnons les jeunes et leurs familles dans une étape clé : l'orientation scolaire. 
            Grâce à un réseau de conseillères indépendantes, nous proposons un suivi personnalisé, expert et bienveillant, 
            fondé sur des valeurs fortes et un engagement d'excellence.
          </div>
        </div>
      </section>

      {/* Section: Des conseillères qualifiées et expertes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/eb5c5d44a1164ca3f39990b7a055b717305d82f8.jpg"
                alt="Conseillère souriante"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Des conseillères <span className="text-yellow-400">qualifiées et expertes</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Les conseillères en orientation suivent une formation rigoureuse et approfondie avant d'intégrer le réseau.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ce programme comprend :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Un apprentissage structuré des systèmes éducatifs, des filières d'études et des débouchés professionnels.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des mises en situation concrètes, basées sur des études de cas réels et des simulations d'entretien, 
                    pour maîtriser les différentes étapes de l'accompagnement.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une certification finale, validant les compétences théoriques et pratiques indispensables à l'exercice du métier.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                De plus, elles suivent un programme de formation continue certifié, leur garantissant une mise à jour 
                constante de leurs connaissances sur les filières d'études, les métiers émergents et les évolutions du système éducatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Un accompagnement 100% personnalisé */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Un accompagnement <span className="text-yellow-400">100% personnalisé</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chaque élève est unique, et son projet d'avenir doit l'être aussi. Nous avons conçu une approche individualisée qui prend en compte :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Ses aptitudes et centres d'intérêt, grâce à des bilans d'orientation approfondis
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Sa personnalité et ses motivations, via des entretiens personnalisés
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Ses résultats académiques et son environnement familial, pour formuler des recommandations réalistes et ambitieuses
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Les tendances du marché du travail, afin de l'aider à faire des choix éclairés et porteurs d'avenir
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Les conseillères ne proposent jamais de solutions toutes faites. Elles co-construisent avec l'élève et ses parents 
                un projet sur mesure, qui correspond à ses aspirations et lui ouvre des perspectives solides.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
            <img
                src="/45c4858ae07bf0aab2c507ef6cc8ec257a259ef3.jpg"
                alt="Conseillère souriante"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Une méthodologie éprouvée et innovante */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/6f68e071cea952a95001bca9545ebdce79eb537d.jpg"
                alt="Conseillère souriante"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une méthodologie <span className="text-yellow-400">éprouvée et innovante</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Les conseillères utilisent une méthode basée sur des référentiels reconnus, combinant :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des outils psychométriques validés scientifiquement pour mieux cerner le profil de l'élève
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des exercices de connaissance de soi qui complètent les tests
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des entretiens approfondis pour favoriser l'échange et la réflexion sur les choix d'orientation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une veille active sur les nouvelles formations, les métiers émergents et les réformes éducatives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une plateforme digitale pour faciliter l'accès aux informations et centraliser les recommandations
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Nous allions ainsi l'humain et la technologie pour offrir une expérience fluide et efficace aux familles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Un cadre éthique et bienveillant */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Un cadre <span className="text-yellow-400">éthique et bienveillant</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                L'orientation est un processus sensible qui peut générer du stress et des doutes chez les jeunes et leurs parents. 
                Les conseillères s'engagent à accompagner chaque élève avec bienveillance, écoute et respect, sans jugement ni pression.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Nous garantissons :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une neutralité absolue dans nos recommandations : aucun partenariat avec des écoles privées ou institutions spécifiques.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une confidentialité totale des échanges et des données personnelles.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Un respect des choix de l'élève et de sa famille, en leur laissant toujours le dernier mot.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Notre mission est d'aider chaque jeune à trouver sa voie, en toute sérénité.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
            <img
                src="/85b777e62dcfdbbb49faf0a2366fce480e7ab670.jpg"
                alt="Conseillère souriante"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Une amélioration continue de nos services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
            <img
                src="/ea4ff2f81b7123f87c8416129d0a10005552bd4c.jpg"
                alt="Conseillère souriante"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une <span className="text-yellow-400">amélioration continue</span> de nos services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez Prometheor, la qualité de l'accompagnement est une priorité. Nous nous engageons dans une démarche 
                d'amélioration continue, à travers :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des enquêtes de satisfaction régulières auprès des familles et des élèves
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des échanges réguliers de bonnes pratiques entre les conseillères
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Une actualisation constante de nos outils et méthodologies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Un engagement à rester à la pointe des évolutions éducatives et professionnelles
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Nous croyons que l'orientation scolaire ne doit pas être un simple choix ponctuel, mais un processus dynamique, 
                pensé pour s'adapter à l'évolution du jeune et aux opportunités de demain.
              </p>
              <p className="text-gray-600 mt-4">
                En choisissant Prometheor, vous faites le choix d'un accompagnement fiable, humain et engagé. 
                Parce que chaque avenir mérite une attention particulière, nous mettons tout en œuvre pour guider 
                les jeunes vers des choix épanouissants et porteurs de succès !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
